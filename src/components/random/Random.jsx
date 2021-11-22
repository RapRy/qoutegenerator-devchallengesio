import React from "react";
import { useNavigate } from "react-router-dom";

import "./_random.scss";

const Random = ({ generateQoute, setLoad }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setLoad(true);
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
