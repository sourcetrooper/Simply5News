import React from "react";
import PropTypes from "prop-types";
import "../../styles/main.scss";

class NewsCard extends React.Component {
  render() {
    return (
      <div className="card">
        <img
          className="card-img-top img-fluid"
          src="http://placehold.it/800x600/f44242/fff"
          alt="Card image cap"
        />
        <div className="card-body">
          <h4 className="card-title">Card 1</h4>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    );
  }
}

export default NewsCard;
