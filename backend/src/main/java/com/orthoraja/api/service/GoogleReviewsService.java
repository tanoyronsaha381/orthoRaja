package com.orthoraja.api.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.orthoraja.api.dto.GoogleReviewResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

@Service
public class GoogleReviewsService {
    private static final String PLACE_DETAILS_URL = "https://maps.googleapis.com/maps/api/place/details/json";

    private final ObjectMapper objectMapper;
    private final HttpClient httpClient;
    private final String placeId;
    private final String apiKey;
    private final String readAllReviewsUrl;
    private final String writeReviewUrl;

    public GoogleReviewsService(
            ObjectMapper objectMapper,
            @Value("${app.google.place-id}") String placeId,
            @Value("${app.google.places-api-key}") String apiKey,
            @Value("${app.google.read-all-reviews-url}") String readAllReviewsUrl,
            @Value("${app.google.write-review-url}") String writeReviewUrl
    ) {
        this.objectMapper = objectMapper;
        this.placeId = placeId;
        this.apiKey = apiKey;
        this.readAllReviewsUrl = readAllReviewsUrl;
        this.writeReviewUrl = writeReviewUrl;
        this.httpClient = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(8)).build();
    }

    public GoogleReviewResponse fetchReviews() {
        if (isBlank(placeId) || isBlank(apiKey)) {
            throw new ResponseStatusException(HttpStatus.SERVICE_UNAVAILABLE, "Google reviews are not configured");
        }

        try {
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(detailsUrl()))
                    .timeout(Duration.ofSeconds(12))
                    .GET()
                    .build();
            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() < 200 || response.statusCode() >= 300) {
                throw new ResponseStatusException(HttpStatus.BAD_GATEWAY, "Google reviews request failed");
            }
            return mapResponse(objectMapper.readTree(response.body()));
        } catch (IOException e) {
            throw new ResponseStatusException(HttpStatus.BAD_GATEWAY, "Could not read Google reviews", e);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            throw new ResponseStatusException(HttpStatus.BAD_GATEWAY, "Google reviews request was interrupted", e);
        }
    }

    private String detailsUrl() {
        String fields = "name,rating,user_ratings_total,reviews,url";
        return PLACE_DETAILS_URL
                + "?place_id=" + encode(placeId)
                + "&fields=" + encode(fields)
                + "&reviews_sort=newest"
                + "&key=" + encode(apiKey);
    }

    private GoogleReviewResponse mapResponse(JsonNode root) {
        String status = root.path("status").asText();
        if (!"OK".equals(status)) {
            throw new ResponseStatusException(HttpStatus.BAD_GATEWAY, "Google reviews returned status " + status);
        }

        JsonNode result = root.path("result");
        List<GoogleReviewResponse.GoogleReview> reviews = new ArrayList<>();
        for (JsonNode item : result.path("reviews")) {
            reviews.add(new GoogleReviewResponse.GoogleReview(
                    textOrNull(item, "author_name"),
                    item.hasNonNull("rating") ? item.path("rating").asInt() : null,
                    textOrNull(item, "text"),
                    textOrNull(item, "relative_time_description"),
                    textOrNull(item, "profile_photo_url")
            ));
        }

        return new GoogleReviewResponse(
                textOrNull(result, "name"),
                result.hasNonNull("rating") ? result.path("rating").asDouble() : null,
                result.hasNonNull("user_ratings_total") ? result.path("user_ratings_total").asInt() : null,
                textOrNull(result, "url"),
                blankToNull(readAllReviewsUrl),
                blankToNull(writeReviewUrl),
                reviews
        );
    }

    private static String textOrNull(JsonNode node, String field) {
        return node.hasNonNull(field) ? node.path(field).asText() : null;
    }

    private static String blankToNull(String value) {
        return isBlank(value) ? null : value;
    }

    private static boolean isBlank(String value) {
        return value == null || value.isBlank();
    }

    private static String encode(String value) {
        return URLEncoder.encode(value, StandardCharsets.UTF_8);
    }
}
