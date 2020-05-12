import React, { Fragment } from "react";
import SearchPanel from "./searchPanel/SearchPanel";

const SearchCard = ({ click }) => {
  return (
    <Fragment>
      <p>Find your other half</p>
      <SearchPanel click={click} />
    </Fragment>
  );
};

export default SearchCard;
