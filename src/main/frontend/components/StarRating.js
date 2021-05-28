import React, { useState } from "react";

const StarRating = ({ handleChange }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <div key={i + 1} style={{ display: "inline-block" }}>
            <label>
              <input
                type="radio"
                name="rating"
                id="rating"
                value={ratingValue}
                onChange={handleChange}
                onClick={() => setRating(ratingValue)}
              />
              <i
                id="starRating"
                className={
                  ratingValue <= (hover || rating)
                    ? "fas fa-star"
                    : "far fa-star"
                }
                style={{ color: "#f9d71c" }}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              ></i>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
