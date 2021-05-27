package com.launchacademy.reviews.services;

import com.launchacademy.reviews.models.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import com.launchacademy.reviews.repositories.MoviesRepository;

import java.util.List;

@Service
public class MoviesService {
    private MoviesRepository moviesRepo;

    @Autowired
    public MoviesService(MoviesRepository moviesRepo) {
    this.moviesRepo = moviesRepo;
    }

    public List<Movie> findAll() {
        return (List<Movie>) moviesRepo.findAll();
    }

    public void add(Movie movie){
        moviesRepo.save(movie);
    }

    public Movie findById(@PathVariable Integer id) {
        return moviesRepo.findById(id).get();
    }

}
