package com.launchacademy.reviews.services;

import com.launchacademy.reviews.models.Movie;
import com.launchacademy.reviews.models.Review;
import com.launchacademy.reviews.repositories.MoviesRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.launchacademy.reviews.repositories.ReviewsRepository;

import java.util.List;

@Service
public class ReviewsService {
    private ReviewsRepository reviewsRepo;
    private MoviesService moviesService;
    private MoviesRepository moviesRepo;

    @Autowired
    public ReviewsService(ReviewsRepository reviewsRepo,
        MoviesService moviesService, MoviesRepository moviesRepo) {
        this.reviewsRepo = reviewsRepo;
        this.moviesService = moviesService;
        this.moviesRepo = moviesRepo;
    }

    public List<Review> findReviewsByMovieId(Integer id) {
        Integer movieId = moviesService.findById(id).getId();
        return reviewsRepo.findReviewsByMovieId(movieId);
    }

    public Review add(Review review) {
        Optional<Movie> currentMovie = moviesRepo.findById(review.getMovie().getId());
        review.setMovie(currentMovie.get());
        return reviewsRepo.save(review);
    }
}
