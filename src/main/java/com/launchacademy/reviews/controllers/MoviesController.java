package com.launchacademy.reviews.controllers;


import com.launchacademy.reviews.models.Movie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.launchacademy.reviews.services.MoviesService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/movies")
public class MoviesController {
    private MoviesService moviesService;

    @Autowired
    public MoviesController(MoviesService moviesService){
        this.moviesService = moviesService;
    }

    @GetMapping
    public List<Movie> showMovies() {
        return moviesService.findAll();
    }

    @PostMapping
    public void addMovies(@RequestBody Movie movie) {
        moviesService.add(movie);
    }
}

