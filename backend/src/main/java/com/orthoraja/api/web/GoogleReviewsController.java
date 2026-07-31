package com.orthoraja.api.web;

import com.orthoraja.api.dto.GoogleReviewResponse;
import com.orthoraja.api.service.GoogleReviewsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/google-reviews")
public class GoogleReviewsController {
    private final GoogleReviewsService googleReviewsService;

    public GoogleReviewsController(GoogleReviewsService googleReviewsService) {
        this.googleReviewsService = googleReviewsService;
    }

    @GetMapping
    public GoogleReviewResponse reviews() {
        return googleReviewsService.fetchReviews();
    }
}
