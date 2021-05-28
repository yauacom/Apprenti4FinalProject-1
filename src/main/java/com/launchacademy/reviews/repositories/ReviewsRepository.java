package com.launchacademy.reviews.repositories;

import com.launchacademy.reviews.models.Review;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewsRepository extends JpaRepository<Review, Integer> {

  @Query("SELECT r from Review r WHERE movie_id = :id")
  List<Review> findReviewsByMovieId(@Param("id") Integer id);
}
