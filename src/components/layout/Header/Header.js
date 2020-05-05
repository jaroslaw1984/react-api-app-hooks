import React, { Component } from "react";
import styles from "./Header.module.scss";

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className={styles.h1}>
          Are you looking for a date ? Find your other half
        </h1>
      </header>
    );
  }
}

export default Header;
