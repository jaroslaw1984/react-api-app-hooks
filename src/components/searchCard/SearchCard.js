import React, { Fragment } from "react";
import SearchPanel from "./searchPanel/SearchPanel";

const SearchCard = () => {
  return (
    <Fragment>
      <h2 className="header">Find your other half</h2>
      <SearchPanel />
    </Fragment>
  );
};

export default SearchCard;
