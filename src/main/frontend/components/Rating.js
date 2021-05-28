import React from "react";

const Rating = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5; ++i) {
    if (i < rating) {
      stars.push(true);
    } else {
      stars.push(false);
    }
  }

  const getStars = stars.map((star, index) => {
    if (star == true) {
      return <i key={index} className="fas fa-star"></i>;
    } else {
      return <i key={index} className="far fa-star"></i>;
    }
  });

  return <>{getStars}</>;
};

export default Rating;
