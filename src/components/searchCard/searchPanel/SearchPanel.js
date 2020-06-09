import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContexct from "../../context/resources/appContext";

const SearchPanel = () => {
  const appContext = useContext(AppContexct);

  const {
    handleChangeGenderMale,
    handleChangeGenderFemale,
    isChecked,
    handleGetUsers,
  } = appContext;

  return (
    <div className="search__panel">
      <div className="search__panel__input">
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          id="male"
          checked={isChecked}
          onChange={handleChangeGenderMale}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          id="female"
          checked={!isChecked}
          onChange={handleChangeGenderFemale}
        />
      </div>
      <div className="search__panel__button">
        <button className="button" onClick={handleGetUsers}>
          Search
        </button>
      </div>
      <div className="search__panel__info">
        <p>
          Tell me more about this <Link to="/about">Application</Link>
        </p>
      </div>
    </div>
  );
};

export default SearchPanel;
