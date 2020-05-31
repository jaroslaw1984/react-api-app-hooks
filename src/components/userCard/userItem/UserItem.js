import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/resources/appContext";
import RateUser from "../rateUser/RateUser";

const UserItem = () => {
  const appContext = useContext(AppContext);

  const {
    users,
    index,
    rating,
    handleSetRate,
    handleChangeIndexNext,
    handleChangeIndexPrevius,
  } = appContext;

  let name = users[index].name.first;
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
      <RateUser
        users={users}
        index={index}
        setRating={handleSetRate}
        rating={rating}
      />
      <span className="rating__number">{rating}</span>
      <Link to={`/details/${name.toLowerCase()}${last.toLowerCase()}`}>
        More
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
