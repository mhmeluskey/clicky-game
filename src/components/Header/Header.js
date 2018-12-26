import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  state = {
    clicks: 0,
    topScore: 0
  };

  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ clicks: this.state.clicks + 1 });
  };

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
