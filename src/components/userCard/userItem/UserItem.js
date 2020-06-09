import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/resources/appContext";
import RateUser from "../rateUser/RateUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
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
  // const user = users[index];

  return (
    <div className="card__userItem">
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
      {/* star rating system */}
      <RateUser />
      {/* show component isUserExists */}
      {isUserExists && (
        <IsUserExists
          click={handleIsUserExists}
          name={name}
          last={last}
          isUserExists={isUserExists}
        />
      )}
      {/* It will show page with details of the person */}
      <Link to={`/details/${name.toLowerCase()}${last.toLowerCase()}`}>
        <button className="button button--state-more">More</button>
      </Link>
      {/* condition when button will hide and show if index is below first showed person.*/}
      {users[index] !== users[0] && (
        <button
          type="button button--state-previus"
          onClick={handleChangeIndexPrevius}
        >
          Previus
        </button>
      )}
      {/* Remember to change last index depends how many api will get users from api  */}
      {users[index] !== users[4] && (
        <button
          type="button button--state-next"
          onClick={handleChangeIndexNext}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default UserItem;
