import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/resources/appContext";
import RateUser from "../rateUser/RateUser";
import Favorite from "../../favorite/Favorite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../favorite/Modal/Modal";

const UserItem = () => {
  const appContext = useContext(AppContext);

  const {
    users,
    index,
    rating,
    favoriteUsers,
    modal,
    handleSetRate,
    handleChangeIndexNext,
    handleChangeIndexPrevius,
    handlePutToFavorite,
  } = appContext;

  const name = users[index].name.first;
  const last = users[index].name.last;
  const picture = users[index].picture.large;
  const msg = users[index].msg.text;
  // const user = users[index];

  return (
    <Fragment>
      <img src={picture} alt={name} />
      <h4>Hey, my name is</h4>
      <h2>
        {name} {last}
      </h2>
      <h4>{msg}</h4>

      <FontAwesomeIcon
        icon={faPlus}
        className="plus"
        onClick={() => handlePutToFavorite(users[index])}
      />
      <RateUser
        users={users}
        index={index}
        setRating={handleSetRate}
        rating={rating}
      />
      {/* show favorite people from array when it is not empty*/}
      {favoriteUsers.length > 0 && <Favorite />}
      {/* initial state condition, show modal if it is true*/}
      {modal && <Modal />}
      {/* It will show page with details of the person */}
      <Link to={`/details/${name.toLowerCase()}${last.toLowerCase()}`}>
        <button className="button button--state-more">More</button>
      </Link>
      {/* condition when button will hide and show if index is below first showed person.*/}
      {users[index] !== users[0] && (
        <button type="button" onClick={handleChangeIndexPrevius}>
          Previus
        </button>
      )}
      {/* Remember to change last index depends how many api will get users from api  */}
      {users[index] !== users[4] && (
        <button type="button" onClick={handleChangeIndexNext}>
          Next
        </button>
      )}
    </Fragment>
  );
};

export default UserItem;
