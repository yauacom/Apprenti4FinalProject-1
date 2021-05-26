package services;

import models.Movies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import repositories.MoviesRepository;

import java.util.List;

@Service
public class MoviesService {
    private MoviesRepository moviesRepo;

    @Autowired
    public MoviesService(MoviesRepository moviesRepo) {
    this.moviesRepo = moviesRepo;
    }

    public List<Movies> findAll() {
        return (List<Movies>) moviesRepo.findAll();
    }

    public void add(Movies movie){
        moviesRepo.save(movie);
    }

    public Movies findById(@PathVariable Integer id) {
        return moviesRepo.findById(id).get();
    }

}
