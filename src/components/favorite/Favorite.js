import React, { useContext, useEffect } from "react";
import AppContext from "../context/resources/appContext";
import Modal from "./Modal/Modal";

const Favorite = () => {
  const appContext = useContext(AppContext);

  const { favoriteUsers, handleShowModal, modal } = appContext;

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(favoriteUsers));
  });
  if (favoriteUsers.length === 0) return null;
  else {
    return (
      <div className={modal ? "favorite" : "favorite active"}>
        <div className="favorite__img">
          <img
            src={favoriteUsers.slice(-1)[0].picture.medium}
            alt={favoriteUsers.slice(-1)[0].name.first}
            onClick={handleShowModal}
          />
        </div>
        <span>Counter: {favoriteUsers.length}</span>
        {/* initial state condition, show modal if it is true*/}
        {modal && <Modal />}
      </div>
    );
  }
};

export default Favorite;
