import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Footer extends Component {
  static defaultProps = {
    date: new Date().getFullYear(),
    name: "Jarosław Sochacki",
    link: "http://portfolio.omegiumfix.pl",
  };

  static propTypes = {
    date: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="footer">
        <p>
          {this.props.name} {this.props.date}
        </p>
        <Link to={this.props.link}>portfolio</Link>
      </div>
    );
  }
}

export default Footer;
