import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AppContect from "../../context/resources/appContext";
import RateUser from "../../userCard/rateUser/RateUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import IsUserExists from "../../userCard/isUserExists/IsUserExists";

const Details = ({ match }) => {
  const appContext = useContext(AppContect);

  const {
    users,
    index,
    isUserExists,
    favoriteUsers,
    handlePutToFavorite,
    handleIsUserExists,
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
        <h1 className="not__exists__h1">This person no longer exists</h1>
        <Link to="/">
          <button className="button not__exists__button--back" alt="Back">
            Back
          </button>
        </Link>
      </Fragment>
    );
  } else {
    return (
      <div className="wrapper">
        <div className="details">
          <div className="details__info info">
            <h2>Age: {user === undefined ? fav.dob.age : user.dob.age}</h2>
            <p>
              Country:{" "}
              <span>
                {user === undefined
                  ? fav.location.country
                  : user.location.country}
              </span>
            </p>
            <p>
              City:{" "}
              <span>
                {user === undefined ? fav.location.city : user.location.city}
              </span>
            </p>
            <p>
              E-mail: <span>{user === undefined ? fav.email : user.email}</span>
            </p>
            <Link to="/">
              <button className="button button__more--back" alt="Back">
                Back
              </button>
            </Link>
          </div>

          <div className="details__person">
            <div className="details__person__img">
              <img
                src={
                  user === undefined ? fav.picture.large : user.picture.large
                }
                alt={user === undefined ? fav.name.first : user.name.first}
              />
            </div>

            <div className="details__person__name">
              <h2>
                {user === undefined ? fav.name.first : user.name.first}{" "}
                {user === undefined ? fav.name.last : user.name.last}
              </h2>
            </div>
          </div>

          <div className="details__nav nav">
            <FontAwesomeIcon
              icon={faUserPlus}
              className="plus"
              alt="Add person to bookmark"
              onClick={() =>
                users.length !== 0
                  ? handlePutToFavorite(users[index])
                  : handlePutToFavorite(favoriteUsers[index])
              }
            />

            {isUserExists && (
              <IsUserExists
                click={handleIsUserExists}
                name={fav.name.first}
                last={fav.name.last}
                isUserExists={isUserExists}
              />
            )}

            <RateUser className="stars" />
          </div>
        </div>
      </div>
    );
  }
};

Details.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Details;
