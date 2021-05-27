import React from "react";

import { Container, Row, Jumbotron, Col } from "react-bootstrap";

const Welcome = () => {
  return (
    <div>
      <Container>
        <Row className="mt-4">
          <Col lg={12} className="mt-4">
            <Jumbotron className="bg-dark text-white">
              <h1>Welcome To Movie Review</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
