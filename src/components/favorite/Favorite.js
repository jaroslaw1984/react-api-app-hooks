import React, { useContext } from "react";
import AppContext from "../context/resources/appContext";
import Modal from "./Modal/Modal";

const Favorite = () => {
  const appContext = useContext(AppContext);

  const { favoriteUsers, handleShowModal, modal } = appContext;

  // check if favorite array have any data if so, show favorite panel
  if (favoriteUsers.length === 0) return null;
  else {
    return (
      <div
        className={
          modal ? "favorite favorite--hide" : "favorite favorite--active"
        }
      >
        <div className="favorite__img">
          <img
            src={favoriteUsers.slice(-1)[0].picture.medium}
            alt={favoriteUsers.slice(-1)[0].name.first}
            onClick={handleShowModal}
          />
        </div>
        <div className="favorite__coutner">
          <span>{favoriteUsers.length}</span>
        </div>
        {/* initial state condition, show modal if it is true*/}
        {modal && <Modal />}
      </div>
    );
  }
};

export default Favorite;
