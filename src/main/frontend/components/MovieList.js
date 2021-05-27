import React, { useState, useEffect } from "react";

import { Container, Row, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

import MovieTile from "./MovieTile.js";
import MovieDetail from "./MovieDetail.js";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch("/api/v1/movies");
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const responseData = await response.json();
      setMovies(responseData);
    } catch (error) {
      console.error(`Unable to complete data fetch.`);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const movieObjects = movies.map((movie) => {
    return <MovieTile key={movie.id} movie={movie} />;
  });

  movies.map((movie) => {
    return <MovieDetail key={movie.id} movie={movie} />;
  });

  return (
    <>
      <Container className="mt-4">
        <Card>
          <Card.Header className="border border-dark bg-dark text-white">
            <FontAwesomeIcon icon={faList} /> Movie List
          </Card.Header>
          <Card.Body>
            <Row>{movieObjects}</Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default MovieList;
