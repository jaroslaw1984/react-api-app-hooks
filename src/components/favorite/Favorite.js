import React, { useContext, useEffect } from "react";
import AppContext from "../context/resources/appContext";
import Modal from "./Modal/Modal";

const Favorite = () => {
  const appContext = useContext(AppContext);

  const { favoriteUsers, handleShowModal, modal } = appContext;

  // add data to local storage from favoriteUsers array
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(favoriteUsers));
  });

  // check if favorite array have any data if so, show favorite panel
  if (favoriteUsers.length === 0) return null;
  else {
    return (
      <div className={modal ? "favorite hide" : "favorite active"}>
        <div className="favorite__img">
          <img
            src={favoriteUsers.slice(-1)[0].picture.medium}
            alt={favoriteUsers.slice(-1)[0].name.first}
            onClick={handleShowModal}
          />
        </div>
        <span className="favorite__coutner">{favoriteUsers.length}</span>
        {/* initial state condition, show modal if it is true*/}
        {modal && <Modal />}
      </div>
    );
  }
};

export default Favorite;
