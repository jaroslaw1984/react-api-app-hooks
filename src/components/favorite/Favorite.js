import React, { useContext } from "react";
import AppContext from "../context/resources/appContext";

const Favorite = () => {
  const appContext = useContext(AppContext);

  const { favoriteUsers, handleShowModal } = appContext;

  return (
    <div className="favorite">
      <div className="favorite__img">
        <img
          src={favoriteUsers.slice(-1)[0].picture.medium}
          alt={favoriteUsers.slice(-1)[0].name.first}
          onClick={handleShowModal}
        />
      </div>
      <span>Counter: {favoriteUsers.length}</span>
    </div>
  );
};

export default Favorite;
