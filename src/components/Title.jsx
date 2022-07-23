import React from "react";
import { GiHammerSickle } from "react-icons/gi";
import "./title.css";
const Title = () => {
  return (
    <div className="title">
      <h2>My Art Your Art</h2>
      <div className="hammer">
        <GiHammerSickle />
      </div>
    </div>
  );
};

export default Title;
