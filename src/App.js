import React, { Component } from "react";
import MickeyCard from "./components/MickeyCard/MickeyCard";
import Header from "./components/Header";
import Score from "./components/Score";
// import mickey from "./mickey.json";

class App extends Component {
  state = {
    clicks: 0,
    topScore: 0
  };

  handleIncrement = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  render() {
    return (
      <div>
        <Header />
        <Score clicks={this.state.clicks} topScore={this.state.topScore} />
        <MickeyCard
          click={this.handleIncrement}
          topScore={this.handleIncrement}
        />
      </div>
    );
  }
}

export default App;
