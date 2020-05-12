import React from "react";

const UserItem = ({ user }) => {
  return (
    <div>
      <img src={user.picture.large} alt={user.name.first} />
      <p>
        {user.name.first} {user.name.last}
      </p>
    </div>
  );
};

export default UserItem;
