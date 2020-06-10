import React, { Fragment } from "react";
import loading from "./searchIcon.svg";

const Loading = () => (
  <Fragment>
    <img
      src={loading}
      alt=""
      className="spinner"
      style={{
        width: "150px",
        height: "150px",
        margin: "0 auto",
        display: "block",
      }}
    />
  </Fragment>
);

export default Loading;
