import React, { Fragment } from "react";
import PropTypes from "prop-types";

const SearchPanel = ({ getUsers, male, female, checked }) => (
  <Fragment>
    <label htmlFor="male">Male</label>
    <input type="radio" id="male" checked={checked} onChange={male} />
    <label htmlFor="female">Female</label>
    <input type="radio" id="female" checked={!checked} onChange={female} />
    <button onClick={getUsers}>Search</button>
  </Fragment>
);

SearchPanel.propTypes = {
  getUsers: PropTypes.func.isRequired,
  male: PropTypes.func.isRequired,
  female: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default SearchPanel;
