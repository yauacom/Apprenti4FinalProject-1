import React, { useState, useEffect } from "react";

import { Row, Col, Button, Container, Form, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faPlusSquare,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";

import ReviewList from "./ReviewList.js";
import StarRating from "./StarRating.js";
import Alert from "./Alert.js";

const MovieDetail = (props) => {
  let movieId = props.match.params.id;
  const initialState = {
    rating: "",
    comment: "",
    username: "",
    movieId: movieId,
  };
  const [movie, setMovie] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState(initialState);
  const [showAlert, setShowAlert] = useState(false);

  const getMovie = async () => {
    try {
      const response = await fetch(`/api/v1/movies/${movieId}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const responseBody = await response.json();
      setMovie(responseBody);
      setReviews(responseBody.reviews);
    } catch (err) {
      console.error(`Error in Fetch: ${err.message}`);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  const addNewReview = async (newReview) => {
    newReview.movieId = movieId;
    try {
      const response = await fetch(`/api/v1/movies/${movieId}`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(newReview),
      });
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      } else {
        setShowAlert(true);
        const data = await response.json();
        if (data) {
          getMovie();
        }
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  const handleChange = (event) => {
    setNewReview({
      ...newReview,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const reviewObj = { ...newReview, movie: { id: movieId } };
    addNewReview(reviewObj);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
    setTimeout(() => location.reload(), 3000);
  };

  const handleReset = () => {
    setNewReview(initialState);
  };

  const { id, title, genre, description, imgUrl } = movie;
  const { rating, comment, username } = newReview;
  let count = 0;

  const reviewObjects = reviews.map((review) => {
    count += 1;
    return <ReviewList key={review.id} review={review} count={count} />;
  });

  let formDisplay = "";
  if (showForm) {
    formDisplay = (
      <Container className="mt-4 ">
        <Card>
          <Card.Header className="border border-dark bg-dark text-white">
            <FontAwesomeIcon icon={faPlusSquare} /> Add new review
          </Card.Header>
          <Form id="reviewFormId" onSubmit={handleSubmit} onReset={handleReset}>
            <Card.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  onChange={handleChange}
                  value={username}
                  name="username"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your comment"
                  onChange={handleChange}
                  value={comment}
                  name="comment"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Rating</Form.Label>
                <StarRating handleChange={handleChange} />
              </Form.Group>
            </Card.Body>
            <Card.Footer>
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
    );
  }

  return (
    <>
      <div style={{ display: showAlert ? "block" : "none" }}>
        <Alert show={showAlert} message={"Movie Saved SuccessFully"} />
      </div>
      <Container className="mt-4">
        <Row>
          <Col lg={12}>
            <Container>
              <img
                src={imgUrl}
                alt={title}
                style={{ width: "100%", height: "450px" }}
              ></img>
              <h2>{title}</h2>
              <p style={{ textTransform: "uppercase" }}>{genre}</p>
              <p>{description}</p>
              <Button variant="success" onClick={() => setShowForm(!showForm)}>
                Write a Review
              </Button>
              {formDisplay}
              <Container className="mt-4">
                <h4>{count} Comments</h4>
                {reviewObjects}
              </Container>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MovieDetail;
