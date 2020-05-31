import React, { Fragment, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RateUser = ({ users, index, setRating, rating }) => {
  useEffect(() => {
    // debugger;
    // save user rate to current user
    if (users[index].rating === 0 && rating !== undefined)
      users[index].rating = rating;
    else {
      // this condition prevent from infnity loop
      if (rating > 0) return;
      else {
        // set value to app state
        setRating(users[index].rating);
      }
    }
  }, [index, setRating, users, rating]);

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
