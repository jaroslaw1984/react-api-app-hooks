import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ users, index, next, previus }) => {
  const name = users[index].name.first;
  const last = users[index].name.last;
  const picture = users[index].picture.large;
  const msg = users[index].msg.text;

  return (
    <Fragment>
      <img src={picture} alt={name} />
      <h4>Hey, my name is</h4>
      <h2>
        {name} {last}
      </h2>
      <h4>{msg}</h4>
      <Link to={`/details/${name.toLowerCase()}${last.toLowerCase()}`}>
        More
      </Link>
      {/* condition when button will hide and show if index is below first showed person.*/}
      {users[index] !== users[0] && <button onClick={previus}>Previus</button>}
      {/* Remember to change last index depends how many api will get users from api  */}
      {users[index] !== users[4] && <button onClick={next}>Next</button>}
    </Fragment>
  );
};

UserItem.propTypes = {
  users: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  next: PropTypes.func.isRequired,
  previus: PropTypes.func.isRequired,
};

export default UserItem;
