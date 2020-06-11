import React, { Fragment, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import AppContext from "../../context/resources/appContext";

const RateUser = () => {
  const appContext = useContext(AppContext);

  const { users, index, handleSetRate, rating, favoriteUsers } = appContext;

  useEffect(() => {
    // save user rate to current user also if array users are empty look user rate in favoriteUsers array
    if (
      users[index] === undefined
        ? favoriteUsers[index].rating === 0
        : users[index].rating === 0 && rating !== undefined
    )
      users[index] === undefined
        ? (favoriteUsers[index].rating = rating)
        : (users[index].rating = rating);
    else {
      // this condition prevent from infnity loop
      if (rating > 0) return;
      else {
        // set value to app state
        users[index] === undefined
          ? handleSetRate(favoriteUsers[index].rating)
          : handleSetRate(users[index].rating);
      }
    }
  }, [index, handleSetRate, users, rating, favoriteUsers]);

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
                onClick={() => handleSetRate(value)}
              />
              <FontAwesomeIcon
                icon={faStar}
                className="stars"
                color={value <= rating ? "#ffc107" : "#e4e5e9"}
              />
            </label>
          );
        })}
        <span className="rating__number">{rating}</span>
      </div>
    </Fragment>
  );
};

export default RateUser;
