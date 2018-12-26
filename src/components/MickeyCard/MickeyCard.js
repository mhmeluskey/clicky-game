import React, { Component } from "react";
import "./MickeyCard.css";

class MickeyCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="img-container">
          <img src={this.props.image} alt="-mickey-character" />
        </div>
      </div>
    );
  }
}

export default MickeyCard;
