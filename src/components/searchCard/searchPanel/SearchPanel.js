import React from "react";

const SearchPanel = ({ getUsers, male, female, checked }) => {
  return (
    <div>
      <label htmlFor="male">Male</label>
      <input type="radio" id="male" checked={checked} onChange={male} />
      <label htmlFor="female">Female</label>
      <input type="radio" id="female" checked={!checked} onChange={female} />
      <button onClick={getUsers}>Search</button>
    </div>
  );
};

export default SearchPanel;
