import React from "react";
import PropTypes from "prop-types";

const IsUserExists = ({ click, name, last, isUserExists }) => {
  return (
    <div
      className={
        isUserExists
          ? "attention attention--active"
          : "attention attention--hide"
      }
    >
      <h3>
        {name} {last}
      </h3>
      <p>already exists in favorite bookmark</p>
      <button onClick={click} className="button button--attention">
        OK
      </button>
    </div>
  );
};

IsUserExists.propTypes = {
  click: PropTypes.func.isRequired,
  isUserExists: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
};

export default IsUserExists;
