package com.orthoraja.api.dto;

import java.util.List;

public record GoogleReviewResponse(
        String placeName,
        Double rating,
        Integer reviewCount,
        String googleMapsUrl,
        String readAllReviewsUrl,
        String writeReviewUrl,
        List<GoogleReview> reviews
) {
    public record GoogleReview(
            String authorName,
            Integer rating,
            String text,
            String relativeTimeDescription,
            String profilePhotoUrl
    ) {}
}
