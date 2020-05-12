import React from "react";

const SearchPanel = ({ click }) => {
  return (
    <div>
      <label htmlFor="male">Male</label>
      <input type="checkbox" id="male" />
      <label htmlFor="female">Female</label>
      <input type="checkbox" id="female" />
      <button onClick={click}>Search</button>
    </div>
  );
};

export default SearchPanel;
