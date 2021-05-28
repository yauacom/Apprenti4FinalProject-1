import React, { useState, useEffect } from "react";

import { Row, Col } from "react-bootstrap";

import Rating from "./Rating.js";

const ReviewList = (props) => {
  const { id, comment, rating, username } = props.review;

  return (
    <>
      <div className="review-box-container">
        <div className="review-box">
          <div className="box-top">
            <div className="profile">
              <div className="profile-img">
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQGUctmkfUxDkQ/profile-displayphoto-shrink_800_800/0/1608351733671?e=1627516800&v=beta&t=ebrgBac-JYuVZa-BwlhTKaMo4WDGWXoP-r2bpljpUMo" />
              </div>

              <div className="name-user">
                <strong>{username}</strong>
                <span>@Someone - {props.count}</span>
              </div>
            </div>

            <div className="reviews">
              <Rating rating={rating} key={props.count} />
            </div>
          </div>

          <div className="user-comment">
            <p>{comment}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewList;
