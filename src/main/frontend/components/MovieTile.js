import React from "react";
import { Link } from "react-router-dom";

import { Col, Card, Button } from "react-bootstrap";

const MovieTile = (props) => {
  const { id, title, genre, imgUrl } = props.movie;

  return (
    <>
      <Col xs={12} sm={12} md={6} lg={4} className="mt-4">
        <Card>
          <Card.Img
            variant="top"
            src={imgUrl}
            style={{ width: "100%", height: "170px" }}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>Genre: {genre}</Card.Text>
            <Link to={`/movies/${id}`}>
              <Button variant="success">View more</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default MovieTile;
