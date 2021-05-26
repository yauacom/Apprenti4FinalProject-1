package services;

import models.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositories.ReviewsRepository;

import java.util.List;

@Service
public class ReviewsService {
    private ReviewsRepository reviewsRepo;
    private MoviesService moviesService;

    @Autowired
    public ReviewsService(ReviewsRepository reviewsRepo) {
        this.reviewsRepo = reviewsRepo;
    }

    public List<Review> findReviewsByMovieId(Integer id) {
        Integer movieId = moviesService.findById(id).getId();
        return (List<Review>) reviewsRepo.findById(movieId).get();
    }
}
