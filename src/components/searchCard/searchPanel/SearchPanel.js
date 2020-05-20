import React, { Fragment, useContext } from "react";
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
    <Fragment>
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
      <button onClick={handleGetUsers}>Search</button>
      <p>
        Tell me more about this <Link to="/about">Application</Link>
      </p>
    </Fragment>
  );
};

export default SearchPanel;
