import React from "react";
import { Link } from "react-router-dom";

import "./_single-qoute.scss";

const SingleQoute = ({ qoute }) => {
  return (
    <div className="container">
      <div className="qoute-container">
        <p>{`"${qoute.quoteText}"`}</p>
      </div>
      <div className="author-container">
        <Link
          to={`/${
            qoute.quoteAuthor !== undefined
              ? qoute.quoteAuthor.replace(" ", "-")
              : ""
          }`}
        >
          <div className="text">
            <span>{qoute.quoteAuthor}</span>
            <span>{qoute.quoteGenre}</span>
          </div>
          <div className="icon">
            <span className="material-icons">arrow_right_alt</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SingleQoute;
