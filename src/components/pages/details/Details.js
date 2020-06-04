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
    favoriteUsers,
    handleSetRate,
    handlePutToFavorite,
  } = appContext;

  // find user in users array with specific condition
  const user = users.find(
    (user) =>
      user.name.first.toLowerCase() + user.name.last.toLowerCase() ===
      match.params.name
  );

  // find user in favorite array if user were not found in user array
  const fav = favoriteUsers.find(
    (fav) =>
      fav.name.first.toLowerCase() + fav.name.last.toLowerCase() ===
      match.params.name
  );

  // condition if user will refresh the page at this endpoint
  if (user === undefined && fav === undefined) {
    return (
      <Fragment>
        <h1>Users data no longer exists</h1>
        <Link to="/">Go back</Link>
      </Fragment>
    );
  } else {
    return (
      <div className="details">
        <div className="details__person">
          <img
            src={user === undefined ? fav.picture.large : user.picture.large}
            alt={user === undefined ? fav.name.first : user.name.first}
          />
          <h1>
            {user === undefined ? fav.name.first : user.name.first}
            {user === undefined ? fav.name.last : user.name.last}
          </h1>
        </div>
        <div className="details__info">
          <h2>Age: {user === undefined ? fav.dob.age : user.dob.age}</h2>
          <p>
            Country:{" "}
            {user === undefined ? fav.location.country : user.location.country}
          </p>
          <p>
            City: {user === undefined ? fav.location.city : user.location.city}
          </p>
          <p>E-mail: {user === undefined ? fav.email : user.email}</p>
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
