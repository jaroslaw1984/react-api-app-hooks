import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Fragment>
      <h1>About this App</h1>
      <p>App to search a person you wanna invite for a date</p>
      <p>Version: 1.0.0</p>
      <Link to="/">Go back</Link>
    </Fragment>
  );
};

export default About;
