import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/resources/appContext";

const Modal = () => {
  const appContext = useContext(AppContext);

  const {
    modal,
    handleCloseModal,
    handleSetRateFromModal,
    handleDeleteUser,
    favoriteUsers,
  } = appContext;

  return (
    <div className={modal ? "modal modal--active" : "modal modal--hide"}>
      <div className="modal__close" onClick={handleCloseModal}></div>
      <div className="modal__containter">
        {favoriteUsers.map((user, index) => (
          <div className="modal__user--elem" key={user.cell}>
            <div className="modal__user--img--container">
              <span
                className="modal__delete--user"
                onClick={() => {
                  handleDeleteUser(index);
                }}
              ></span>
              <img
                src={user.picture.medium}
                alt={user.name.first}
                className="modal__user--img"
              />
            </div>
            <h5>
              {user.name.first} {user.name.last}
            </h5>
            <Link
              to={`/details/${user.name.first.toLowerCase()}${user.name.last.toLowerCase()}`}
            >
              <button
                className="button button--state-more"
                onClick={() => {
                  handleCloseModal();
                  handleSetRateFromModal(user.rating);
                }}
              >
                More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modal;
