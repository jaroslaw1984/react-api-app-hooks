import React, { useState } from "react";
import UserItem from "./userItem/UserItem";
import PropTypes from "prop-types";

const UserCard = ({ users }) => {
  const [index, setIndex] = useState(0);

  // it change and increase index of users array
  const handleChangeIndexNext = () => {
    setIndex(index + 1);
  };

  // it change and decreases index of users array
  const handleChangeIndexPrevius = () => {
    setIndex(index - 1);
  };

  return (
    <div className="card">
      <UserItem
        users={users}
        index={index}
        next={handleChangeIndexNext}
        previus={handleChangeIndexPrevius}
      />
    </div>
  );
};

// check if users array is array
UserCard.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserCard;
