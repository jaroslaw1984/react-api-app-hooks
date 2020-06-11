import React from "react";
import loading from "./searchIcon.svg";

const Loading = () => (
  <div className="spinner">
    <img src={loading} alt="" className="spinner__img" />
  </div>
);

export default Loading;
