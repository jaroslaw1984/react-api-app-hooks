import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/resources/appContext";
import RateUser from "../rateUser/RateUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import IsUserExists from "../isUserExists/IsUserExists";

const UserItem = () => {
  const appContext = useContext(AppContext);

  const {
    users,
    index,
    isUserExists,
    handleChangeIndexNext,
    handleChangeIndexPrevius,
    handlePutToFavorite,
    handleIsUserExists,
  } = appContext;

  const name = users[index].name.first;
  const last = users[index].name.last;
  const picture = users[index].picture.large;
  const msg = users[index].msg.text;

  // Navigate icons
  const next = ">";
  const previus = "<";

  return (
    <div className="card__item">
      <div className="card__item__nav">
        <div className="card__item__nav__previus">
          {/* button will hide and show if index is below first showed person.*/}
          {users[index] !== users[0] && (
            <button
              className="button--previus"
              onClick={handleChangeIndexPrevius}
            >
              {previus}
            </button>
          )}
        </div>

        <div className="card__item__nav__img">
          <div>
            <img src={picture} alt={name} />
          </div>
        </div>

        <div className="card__item__nav__next">
          {/* Remember to change last index depends how many api will get users from api  */}
          {users[index] !== users[4] && (
            <button className="button--next" onClick={handleChangeIndexNext}>
              {next}
            </button>
          )}
        </div>
      </div>

      <h4>Hey, my name is</h4>
      <h2>
        {name} {last}
      </h2>
      <h4>{msg}</h4>

      <FontAwesomeIcon
        icon={faUserPlus}
        className="plus"
        onClick={() => handlePutToFavorite(users[index])}
      />

      {/* show component isUserExists */}
      {isUserExists && (
        <IsUserExists
          click={handleIsUserExists}
          name={name}
          last={last}
          isUserExists={isUserExists}
        />
      )}

      {/* star rating system */}
      <RateUser />

      {/* It will show page with details of the person */}
      <Link to={`/details/${name.toLowerCase()}${last.toLowerCase()}`}>
        <button className="button button--more">More</button>
      </Link>
    </div>
  );
};

export default UserItem;
