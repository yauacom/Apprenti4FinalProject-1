import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to={""} className="navbar-brand">
            <FontAwesomeIcon icon={faFilm} color="red" /> Movies Review
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/movies"} className="ml-4 nav-link">
                Movies List
              </Link>
              <Link to={"/movies/new"} className="ml-4 nav-link">
                Add new movie
              </Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="ml-2"
                aria-label="Search"
              />
              <Button variant="outline-success" className="ml-4">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to={""} className="navbar-brand">
            <FontAwesomeIcon icon={faFilm} color="red" /> Movies Review
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to={"/movies"} className="ml-4 nav-link">
                Movies List
              </Link>
              <Link to={"/movies/new"} className="ml-4 nav-link">
                Add new movie
              </Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
