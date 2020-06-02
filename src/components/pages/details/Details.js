import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AppContect from "../../context/resources/appContext";
import RateUser from "../../userCard/rateUser/RateUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Details = ({ match }) => {
  const appContext = useContext(AppContect);

  const {
    users,
    index,
    rating,
    handleSetRate,
    handlePutToFavorite,
  } = appContext;

  // find user with specific condition
  const user = users.find(
    (user) =>
      user.name.first.toLowerCase() + user.name.last.toLowerCase() ===
      match.params.name
  );

  // condition if user will refresh the page at this endpoint
  if (user === undefined) {
    return (
      <Fragment>
        <h1>User data no longer exists</h1>
        <Link to="/">Go back</Link>
      </Fragment>
    );
  } else {
    return (
      <div className="details">
        <div className="details__person">
          <img src={user.picture.large} alt={user.name.first} />
          <h1>
            {user.name.first} {user.name.last}
          </h1>
        </div>
        <div className="details__info">
          <h2>Age: {user.dob.age}</h2>
          <p>Country: {user.location.country}</p>
          <p>City: {user.location.city}</p>
          <p>E-mail: {user.email}</p>
        </div>

        <Link to="/">Go back</Link>
        <RateUser
          users={users}
          index={index}
          setRating={handleSetRate}
          rating={rating}
        />
        <FontAwesomeIcon
          icon={faPlus}
          className="plus"
          onClick={() => handlePutToFavorite(users[index])}
        />
      </div>
    );
  }
};

Details.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Details;
