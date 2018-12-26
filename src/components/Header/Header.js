import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>The Clicky Game</h1>
        <p>
          Click on an image to earn points, but don't click any more than once!
        </p>
      </div>
    );
  }
}

export default Header;
