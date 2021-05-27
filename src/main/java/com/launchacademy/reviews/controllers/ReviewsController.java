package com.launchacademy.reviews.controllers;

import com.launchacademy.reviews.models.Movie;
import com.launchacademy.reviews.models.Review;
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

    @PostMapping
    public void addReview(@RequestBody Review review) {
        reviewsService.add(review);
    }


//    @GetMapping
//    public List<Review> showReviews(@PathVariable Integer id) {
//        List<Review> reviews = reviewsService.findReviewsByMovieId(id);
//        return reviews;
//    }

//    @GetMapping
//    public Movie showMovie(@PathVariable Integer id){
//        return moviesService.findById(id);
//    }

  //    private List<Review> showReviews(@PathVariable Integer id) {
//        List<Review> reviews = reviewsService.findReviewsByMovieId(id);
//        return reviews;
//    }
//
//    @GetMapping
//    public HashMap<Movie, List> showMovie(@PathVariable Integer id){
//        HashMap<Movie, List> showPage = new HashMap<>();
//        List<Review> reviews = showReviews(id);
//        showPage.put(moviesService.findById(id), reviews);
//        return showPage;
//    }
}
