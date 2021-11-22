import React from "react";
import { Link } from "react-router-dom";

import "./_single-qoute.scss";

const SingleQoute = ({ qoute, isShowAuthor }) => {
  return (
    qoute && (
      <div className="container">
        <div className="qoute-container">
          <p>{`"${qoute.content}"`}</p>
        </div>
        {isShowAuthor && (
          <div className="author-container">
            <Link to={`/${qoute.authorSlug}`}>
              <div className="text">
                <span>{qoute.author}</span>
                <span>{qoute.tags[0].replace("-", " ") || ""}</span>
              </div>
              <div className="icon">
                <span className="material-icons">arrow_right_alt</span>
              </div>
            </Link>
          </div>
        )}
      </div>
    )
  );
};

export default SingleQoute;
