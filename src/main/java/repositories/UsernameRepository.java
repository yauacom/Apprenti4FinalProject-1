package repositories;

import models.Movies;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsernameRepository extends CrudRepository<Movies, Integer> {
}
