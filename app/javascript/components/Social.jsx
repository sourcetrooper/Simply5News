import React from "react";
import PropTypes from "prop-types";
import "../../styles/main.scss";

class Social extends React.Component {
  render() {
    return (
      <div className="social">
        <a href="https://www.facebook.com" target="_blank">
          <img
            className="social_icon"
            src={require("../../images/icons/facebook_icon.png")}
            alt="Facebook Icon"
          />
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <img
            className="social_icon"
            src={require("../../images/icons/twitter_icon.png")}
            alt="Twitter Icon"
          />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <img
            className="social_icon"
            src={require("../../images/icons/insta_icon.png")}
            alt="Instagram Icon"
          />
        </a>
      </div>
    );
  }
}

export default Social;
