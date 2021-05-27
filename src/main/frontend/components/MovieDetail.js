import React from "react";

import { Row, Col, Button } from "react-bootstrap";

const MovieTile = () => {
  return (
    <div className="mt-4">
      <Row>
        <Col lg={3}>
          <Button className="success"> Write a Review</Button>
        </Col>
        <Col lg={9}>
          <h2>Star Wars: The Rise of Skywalker</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8Qn_spdM5Zg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p>Description</p>
        </Col>
      </Row>
    </div>
  );
};

export default MovieTile;
