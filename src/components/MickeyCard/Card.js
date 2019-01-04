import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  cardClickListner = () => {
    this.props.click(this.props.id);
  };

  render() {
    return (
      <div className="wrapper">
        <div className="card">
          <div className="img-container">
            <img
              src={this.props.image}
              alt="-mickey-character"
              onClick={this.cardClickListner}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
