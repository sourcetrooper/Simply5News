import React from "react";
import PropTypes from "prop-types";
import "../../styles/main.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <a href="http://localhost:3000/news">
          <img
            className="mainlogo"
            src={require("../../images/Simply5News.png")}
            alt="Main Logo"
          />
        </a>
      </div>
    );
  }
}

export default Header;
