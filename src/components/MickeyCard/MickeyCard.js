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
          <div key={mickey.id} className="card">
            <div className="img-container">
              <img
                src={mickey.image}
                alt="-mickey-character"
                onClick={(this.props.click, this.props.topScore)}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default MickeyCard;
