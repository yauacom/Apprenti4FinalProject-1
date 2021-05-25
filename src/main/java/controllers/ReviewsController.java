package controllers;

import models.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import services.ReviewsService;

@RestController
@RequestMapping("/api/v1/movies/{id}/reviews")
public class ReviewsController {
    private ReviewsService reviewsService;

    @Autowired
    public ReviewsController(ReviewsService reviewsService) {this.reviewsService = reviewsService;}

    @GetMapping
    public Iterable<Review> findAll() {return reviewsService.findAllByMovie();}

}
