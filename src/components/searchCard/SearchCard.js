import React, { Fragment } from "react";
import SearchPanel from "./searchPanel/SearchPanel";
import PropTypes from "prop-types";

const SearchCard = ({ getUsers, male, female, checked }) => {
  return (
    <Fragment>
      <p className="header">Find your other half</p>
      <SearchPanel
        getUsers={getUsers}
        male={male}
        female={female}
        checked={checked}
      />
    </Fragment>
  );
};

SearchCard.propTypes = {
  getUsers: PropTypes.func.isRequired,
  male: PropTypes.func.isRequired,
  female: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default SearchCard;
