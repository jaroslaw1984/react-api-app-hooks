import React, { Fragment } from "react";
import loading from "./searchIcon.svg";

const Loading = () => (
  <Fragment>
    <img
      src={loading}
      alt="Loading..."
      className="spinner"
      style={{
        width: "200px",
        height: "200px",
        margin: "0 auto",
        display: "block",
      }}
    />
  </Fragment>
);

export default Loading;
