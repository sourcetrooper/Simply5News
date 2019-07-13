import React from "react";
import PropTypes from "prop-types";
import "../../styles/main.scss";
import NewsCard from "./NewsCard";

class NewsCarousel extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center mb-3">Bootstrap Multi-Card Carousel</h1>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner row w-100 mx-auto">
            <div className="carousel-item col-md-4 active">
              <NewsCard />
            </div>
            <div className="carousel-item col-md-4">
              <NewsCard />
            </div>
            <div className="carousel-item col-md-4">
              <NewsCard />
            </div>
            <div className="carousel-item col-md-4">
              <NewsCard />
            </div>
            <div className="carousel-item col-md-4">
              <NewsCard />
            </div>
            <div className="carousel-item col-md-4">
              <NewsCard />
            </div>
            <div className="carousel-item col-md-4">
              <NewsCard />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default NewsCarousel;
