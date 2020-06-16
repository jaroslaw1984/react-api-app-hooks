import React from "react";
import loading from "./searchIcon.svg";

const Loading = () => (
  <div className="spinner">
    <img src={loading} alt="Loading" className="spinner__img" />
  </div>
);

export default Loading;
