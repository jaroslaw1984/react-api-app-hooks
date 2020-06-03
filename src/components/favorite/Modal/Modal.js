import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/resources/appContext";

const Modal = () => {
  const appContext = useContext(AppContext);

  const { handleCloseModal, favoriteUsers, users, index } = appContext;

  const name = users[index].name.first;
  const last = users[index].name.last;

  return (
    <div className="modal">
      <div className="modal__close" onClick={handleCloseModal}></div>
      <div className="modal__containter">
        {favoriteUsers.map((user) => (
          <div className="modal__elem">
            <img
              src={user.picture.medium}
              alt={user.name.first}
              className="modal__img"
            />
            <h5>
              {user.name.first} {user.name.last}
            </h5>
            <Link to={`/details/${name.toLowerCase()}${last.toLowerCase()}`}>
              <button className="button button--state-more">More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modal;
