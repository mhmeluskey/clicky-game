import React, { Component } from "react";
import "./Score.css";

class Score extends Component {
  render() {
    return (
      <div className="scores">
        <div className="card ">
          <div className="card-body">
            Score: {this.props.clicks} | Top Score: {this.props.topScore}
          </div>
        </div>
      </div>
    );
  }
}

export default Score;
