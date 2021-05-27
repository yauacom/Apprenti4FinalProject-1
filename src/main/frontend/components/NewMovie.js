import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faPlusSquare,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";

import Alert from "./Alert.js";

const NewMovie = (props) => {
  let initialState = {
    title: "",
    genre: "",
    description: "",
    imgUrl: "",
  };

  const [newMovie, setNewMovie] = useState(initialState);

  const { title, description, imgUrl, genre } = newMovie;

  const [redirect, setRedirect] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (event) => {
    setNewMovie({
      ...newMovie,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleReset = () => {
    setNewMovie(initialState);
  };

  const addNewMovie = async () => {
    try {
      const response = await fetch("/api/v1/movies", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(newMovie),
      });
      if (!response.ok) {
        if (response.status === 422) {
          const data = await response.json();
          return setErrors(data.errors);
        } else {
          const errorMessage = `${response.status} (${response.statusText})`;
          const error = new Error(errorMessage);
          throw error;
        }
      } else {
        const data = await response.json();
        if (data) {
          setShowAlert(true);
          setRedirect(true);
          handleReset();
        }
      }
    } catch (error) {
      console.error(`Error in fetch: ${error}`);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `title: ${title}, genre: ${genre}, imgUrl: ${imgUrl}, description: ${description}`
    );
    addNewMovie();
  };

  if (redirect) {
    return <Redirect to="/movies" />;
  }

  return (
    <>
      <div style={{ display: showAlert ? "block" : "none" }}>
        <Alert />
      </div>
      <Container style={{ marginTop: "8.5rem" }}>
        <Card>
          <Card.Header className="border border-dark bg-dark text-white">
            <FontAwesomeIcon icon={faPlusSquare} /> Add new movie
          </Card.Header>
          <Form id="movieFormId" onSubmit={handleSubmit} onReset={handleReset}>
            <Card.Body>
              <Form.Row>
                <Form.Group
                  as={Col}
                  xs={12}
                  sm={12}
                  lg={6}
                  className="mb-3"
                  controlId="formGridTitle"
                >
                  <Form.Label>Movie Title</Form.Label>
                  <Form.Control
                    name="title"
                    type="text"
                    placeholder="Enter movie title"
                    value={title}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group
                  as={Col}
                  xs={12}
                  sm={12}
                  lg={6}
                  className="mb-3"
                  controlId="formGridGenre"
                >
                  <Form.Label>Movie Genre</Form.Label>
                  <Form.Control
                    name="genre"
                    type="text"
                    placeholder="Enter movie genre"
                    value={genre}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group
                  as={Col}
                  xs={12}
                  sm={12}
                  lg={6}
                  className="mb-3"
                  controlId="formGridImageUrl"
                >
                  <Form.Label>Movie Image Url</Form.Label>
                  <Form.Control
                    name="imgUrl"
                    type="text"
                    placeholder="Enter movie img url"
                    value={imgUrl}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group
                  as={Col}
                  xs={12}
                  sm={12}
                  lg={6}
                  className="mb-3"
                  controlId="formGridDescription"
                >
                  <Form.Label>Movie Description</Form.Label>
                  <Form.Control
                    name="description"
                    type="text"
                    placeholder="Enter movie description"
                    value={description}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Form.Row>
            </Card.Body>
            <Card.Footer style={{ textAlign: "right" }}>
              <Button variant="success" type="submit">
                <FontAwesomeIcon icon={faSave} /> Submit
              </Button>{" "}
              <Button variant="warning" type="reset">
                <FontAwesomeIcon icon={faUndo} /> Reset
              </Button>
            </Card.Footer>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default NewMovie;
