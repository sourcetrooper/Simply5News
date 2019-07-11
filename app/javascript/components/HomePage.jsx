import React from "react";
import PropTypes from "prop-types";
import "../../styles/main.scss";
import Header from "./Header";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home">
        <Header />
      </div>
    );
  }
}

HomePage.propTypes = {
  greeting: PropTypes.string
};
export default HomePage;
