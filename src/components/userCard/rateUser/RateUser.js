import React, { Fragment, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RateUser = ({ users, index, setRating, rating }) => {
  useEffect(() => {
    // if (users[index].rating === 0 && rating !== 0) {
    //   setRating(0);
    // } else {
    users[index].rating = rating;
    // }
  });

  console.log(rating);
  console.log(users);

  return (
    <Fragment>
      <div className="rating">
        {[...Array(5)].map((star, i) => {
          const value = i + 1;
          return (
            <label key={i}>
              <input
                type="radio"
                name="rate"
                value={value}
                onClick={() => setRating(value)}
              />
              <FontAwesomeIcon
                icon={faStar}
                className="star"
                color={value <= rating ? "#ffc107" : "#e4e5e9"}
              />
            </label>
          );
        })}
      </div>
    </Fragment>
  );
};

export default RateUser;
