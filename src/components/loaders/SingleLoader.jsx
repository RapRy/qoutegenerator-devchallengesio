import React from "react";

import "./_singleloader.scss";

const SingleLoader = ({ isShowAuthor }) => {
  return (
    <div className="container-loader">
      <div>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      {isShowAuthor && (
        <div>
          <span></span>
          <span></span>
        </div>
      )}
    </div>
  );
};

export default SingleLoader;
