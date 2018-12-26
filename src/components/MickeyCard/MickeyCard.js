import React from "react";
import "./MickeyCard.css";

const MickeyCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default MickeyCard;
