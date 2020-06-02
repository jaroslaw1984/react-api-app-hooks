import React, { useContext } from "react";
import AppContext from "../context/resources/appContext";

const Favorite = () => {
  const appContext = useContext(AppContext);

  const { favoriteUsers } = appContext;

  return (
    <div className="favorite">
      <div className="favorite__img">
        {favoriteUsers.length !== 0 && (
          <img
            src={favoriteUsers.slice(-1)[0].picture.medium}
            alt={favoriteUsers.slice(-1)[0].name.first}
          />
        )}
      </div>
      <span>Counter: {favoriteUsers.length}</span>
    </div>
  );
};

export default Favorite;
