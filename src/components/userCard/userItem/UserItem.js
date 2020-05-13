import React, { Fragment } from "react";
import PropTypes from "prop-types";

const UserItem = ({ users, index, next, previus }) => (
  <Fragment>
    <img src={users[index].picture.large} alt={users[index].name.first} />
    <p>
      {users[index].name.first} {users[index].name.last}
    </p>
    {/* condition when button will hide and show */}
    {users[index] !== users[0] && <button onClick={previus}>Previus</button>}
    {/* Remember to change last index depends how many api will get users from api  */}
    {users[index] !== users[4] && <button onClick={next}>Next</button>}
  </Fragment>
);

UserItem.propTypes = {
  users: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  next: PropTypes.func.isRequired,
  previus: PropTypes.func.isRequired,
};

export default UserItem;
