import React from "react";

import { Navbar, Container, Col } from "react-bootstrap";

const Footer = () => {
  let fullYear = new Date().getFullYear();

  return (
    <>
      <Navbar fixed="bottom" bg="dark" variant="dark">
        <Container>
          <Col lg={12} className="text-center text-muted">
            <div>
              {fullYear} Make with{" "}
              <i
                className="fa fa-heart"
                aria-hidden="true"
                style={{ color: "red" }}
              ></i>
            </div>
          </Col>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
