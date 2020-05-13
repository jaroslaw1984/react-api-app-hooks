import React, { Fragment } from "react";

const UserItem = ({ users, index, next, previus }) => (
  <Fragment>
    <img src={users[index].picture.large} alt={users[index].name.first} />
    <p>
      {users[index].name.first} {users[index].name.last}
    </p>
    {/* condition when button will hide and show */}
    {users[index] !== users[0] && <button onClick={previus}>Previus</button>}
    {users[index] !== users[4] && <button onClick={next}>Next</button>}
  </Fragment>
);

export default UserItem;
