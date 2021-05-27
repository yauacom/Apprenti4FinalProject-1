package com.launchacademy.reviews.services;

import com.launchacademy.reviews.models.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.launchacademy.reviews.repositories.ReviewsRepository;

import java.util.List;

@Service
public class ReviewsService {
    private ReviewsRepository reviewsRepo;
    private MoviesService moviesService;

    @Autowired
    public ReviewsService(ReviewsRepository reviewsRepo,
        MoviesService moviesService) {
        this.reviewsRepo = reviewsRepo;
        this.moviesService = moviesService;
    }

    public List<Review> findReviewsByMovieId(Integer id) {
        Integer movieId = moviesService.findById(id).getId();
        return (List<Review>) reviewsRepo.findById(movieId).get();
    }

    public void add(Review review) {
        reviewsRepo.save(review);
    }
}
