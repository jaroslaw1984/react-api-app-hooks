import React, { Fragment } from "react";
import SearchPanel from "./searchPanel/SearchPanel";

const SearchCard = ({ getUsers, male, female, checked }) => {
  return (
    <Fragment>
      <p>Find your other half</p>
      <SearchPanel
        getUsers={getUsers}
        male={male}
        female={female}
        checked={checked}
      />
    </Fragment>
  );
};

export default SearchCard;
