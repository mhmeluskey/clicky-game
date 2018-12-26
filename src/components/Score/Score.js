import React, { Component } from "react";
import "./Score.css";

class Score extends Component {
  state = { clicks: 0, topScore: 0 };
  render() {
    return (
      <div className="scores">
        <div className="card ">
          <div className="card-body">
            Score: {this.state.clicks} | Top Score: {this.state.topScore}
          </div>
        </div>
      </div>
    );
  }
}

export default Score;
