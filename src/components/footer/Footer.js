import React, { Component } from "react";
import PropTypes from "prop-types";

class Footer extends Component {
  static defaultProps = {
    date: new Date().getFullYear(),
    name: "Jarosław Sochacki",
    link: "http://portfolio.omegiumfix.pl",
  };

  static propTypes = {
    date: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  };

  render() {
    return (
      <footer>
        <p>
          {this.props.name} {this.props.date}
        </p>
        <a href={this.props.link}>portfolio</a>
      </footer>
    );
  }
}

export default Footer;
