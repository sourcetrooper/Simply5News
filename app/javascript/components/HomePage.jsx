import React from "react";
import PropTypes from "prop-types";
import "../../styles/main.scss";
import Header from "./Header";
import Social from "./Social";
import NewsCarousel from "./NewsCarousel";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home">
        <Social />
        <Header />
      </div>
    );
  }
}

HomePage.propTypes = {
  greeting: PropTypes.string
};
export default HomePage;
