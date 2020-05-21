import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Not Found 404</h1>
      <p>The page you are looking for does not exits</p>
      <Link to={"/"}>Home page</Link>
    </div>
  );
};

export default NotFound;
