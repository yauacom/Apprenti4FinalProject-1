package controllers;

import models.Movies;
import models.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import services.MoviesService;
import services.ReviewsService;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

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
    public List<Review> showReviews(@PathVariable Integer id) {
        List<Review> reviews = reviewsService.findReviewsByMovieId(id);
        return reviews;
    }

    @GetMapping
    public Movies showMovie(@PathVariable Integer id){
        return moviesService.findById(id);
    }

//    @PostMapping
//    adding movie review

}
