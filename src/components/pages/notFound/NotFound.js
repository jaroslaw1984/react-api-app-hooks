import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Fragment>
      <div className="container__not__found">
        <h2>Not Found 404</h2>
        <p>The page you are looking for does not exits</p>
      </div>
      <Link to={"/"}>
        <button className="button button__not__found">Back</button>
      </Link>
    </Fragment>
  );
};

export default NotFound;
