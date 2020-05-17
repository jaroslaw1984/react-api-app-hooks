import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ users, index, next, previus }) => {
  return (
    <Fragment>
      <img src={users[index].picture.large} alt={users[index].name.first} />
      <h4>Hey, my name is</h4>
      <h2>
        {users[index].name.first} {users[index].name.last}
      </h2>
      <h4>{users[index].msg.text}</h4>
      <Link to={`/details/${users[index].name.first}${users[index].name.last}`}>
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
