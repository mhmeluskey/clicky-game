import React, { Component } from "react";
import "./MickeyCard.css";

class MickeyCard extends Component {
  state = {
    clicked: 0
  };

  handleIncrement = props => {
    this.setState({ clicked: this.state.clicked + 1 });
  };

  render() {
    return (
      <div className="card">
        <div className="img-container">
          <img
            src={this.props.image}
            alt="-mickey-character"
            onClick={this.handleIncrement}
          />
        </div>
      </div>
    );
  }
}

export default MickeyCard;
