import React from "react";
import PropTypes from "prop-types";
import "../../styles/main.scss";
import HomePage from "./HomePage";
class MainPage extends React.Component {
  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

MainPage.propTypes = {
  greeting: PropTypes.string
};
export default MainPage;
