package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.models.Movie;
import com.launchacademy.reviews.models.Review;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.launchacademy.reviews.services.MoviesService;
import com.launchacademy.reviews.services.ReviewsService;


@RestController
@RequestMapping("/api/v1/movies/{id}")
public class ReviewsController {
    private ReviewsService reviewsService;
    private MoviesService moviesService;

    @Autowired
    public ReviewsController(ReviewsService reviewsService, MoviesService moviesService) {
        this.reviewsService = reviewsService;
        this.moviesService = moviesService;
    }

    @GetMapping
    public Movie findById(@PathVariable Integer id) {
        return moviesService.findById(id);
    }

    @GetMapping("/reviews")
    public List<Review> findReviewsByMovieId(@PathVariable Integer id) {
        Movie movie = moviesService.findById(id);
        return reviewsService.findReviewsByMovieId(movie.getId());
    }

    @PostMapping
    public void addReview(@RequestBody Review review) {
        reviewsService.add(review);
    }
}
