import React, { useState, useEffect } from "react";

import { Row, Col, Button, Container } from "react-bootstrap";

const MovieTile = (props) => {
  const [movie, setMovie] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [afterSubmission, setAfterSubmission] = useState(false);

  const getMovie = async () => {
    try {
      const movieId = props.match.params.id;
      const response = await fetch(`/api/v1/movies/${movieId}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const responseBody = await response.json();
      setMovie(responseBody);
    } catch (err) {
      console.error(`Error in Fetch: ${err.message}`);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  const { title, genre, description, imgUrl, reviews } = movie;

  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col lg={3}>
            <Button className="success"> Write a Review</Button>
          </Col>
          <Col lg={9}>
            <Container>
              <img
                src={imgUrl}
                alt={title}
                style={{ width: "100%", height: "450px" }}
              ></img>
              <h2>{title}</h2>
              <p>{genre}</p>
              <p>{description}</p>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MovieTile;
