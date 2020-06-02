import React, { useContext } from "react";
import AppContext from "../context/resources/appContext";

const Favorite = () => {
  const appContext = useContext(AppContext);

  const { favoriteUsers } = appContext;

  return (
    <div className="container">
      <span>Counter: {favoriteUsers.lenght}</span>
    </div>
  );
};

export default Favorite;
