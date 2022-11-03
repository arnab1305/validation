import React from "react";
import "./MainCard.css";
import DisplayCard from "./DisplayCard";
import AdditionCard from "./AdditionCard";

const MainCard = () => {
  return (
    <div className="container">
      <DisplayCard/>
      <AdditionCard/>
    </div>
  );
};

export default MainCard;
