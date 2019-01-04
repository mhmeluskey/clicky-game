import React, { Component } from "react";
import "./Score.css";

class Score extends Component {
  render() {
    return (
      <div className="scores">
        <div className="card ">
          <h5 className="message">{this.props.message}</h5>
          <div className="card-body">
            Score: {this.props.clicks} | Top Score:{this.props.topScore}
          </div>
        </div>
      </div>
    );
  }
}

export default Score;
