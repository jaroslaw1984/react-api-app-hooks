import React from "react";
import SearchPanel from "./searchPanel/SearchPanel";

const SearchCard = () => (
  <main>
    <div className="search__card">
      <h2 className="search__card__header">Find your other half</h2>
      <SearchPanel />
    </div>
  </main>
);

export default SearchCard;
