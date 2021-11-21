import React from "react";
import { useNavigate } from "react-router-dom";

import "./_random.scss";

const Random = ({ generateQoute }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    generateQoute();
    navigate("/");
  };

  return (
    <button className="button" onClick={handleClick}>
      random
      <span className="material-icons">sync</span>
    </button>
  );
};

export default Random;
