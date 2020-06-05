import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/resources/appContext";

const Modal = () => {
  const appContext = useContext(AppContext);

  const {
    modal,
    handleCloseModal,
    handleSetRateFromModal,
    favoriteUsers,
  } = appContext;

  return (
    <div className={modal ? "modal modal--active" : "modal modal--hide"}>
      <div className="modal__close" onClick={handleCloseModal}></div>
      <div className="modal__containter">
        {favoriteUsers.map((user) => (
          <div className="modal__user--elem" key={user.cell}>
            <img
              src={user.picture.medium}
              alt={user.name.first}
              className="modal__user--img"
            />
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
