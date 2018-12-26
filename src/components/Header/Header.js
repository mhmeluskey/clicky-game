import React from "react";
import "./Header.css";

const Header = props => (
  <div className="jumbotron">
    <h1>The Clicky Game</h1>
    <p>Click on an image to earn points, but don't click any more than once!</p>

    <div className="card">
      <div className="card-body">Score: 0 | Top Score: 0 </div>
    </div>
  </div>
);

export default Header;
