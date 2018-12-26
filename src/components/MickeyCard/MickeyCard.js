import React, { Component } from "react";
import "./MickeyCard.css";
import mickey from "./mickey.json";

class MickeyCard extends Component {
  state = {
    mickey
  };

  render() {
    return (
      <div className="wrapper">
        {this.state.mickey.map(mickey => (
          <div className="card">
            <div className="img-container">
              <img
                src={mickey.image}
                key={mickey.id}
                onClick={this.handleIncrement}
                alt="-mickey-character"
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default MickeyCard;
