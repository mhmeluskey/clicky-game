import React, { Component } from "react";
import Card from "./components/MickeyCard/Card";
import Header from "./components/Header";
import Score from "./components/Score";
import mickies from "./mickey.json";

class App extends Component {
  state = {
    clicks: 0,
    topScore: 0,
    curScore: 0,
    message: "Click image to Start",
    wasClicked: []
  };

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  clickListener = id => {
    if (this.state.wasClicked.indexOf(id) > -1) {
      console.log("clicked twice");
      this.setState({
        wasClicked: [],
        message: "You've Lost!",
        clicks: 0,
        topScore: 0
      });
      this.shuffleArray(mickies);
    } else {
      this.shuffleArray(mickies);
      console.log(id);
      let updateWasClicked = [...this.state.wasClicked];
      updateWasClicked.push(id);
      this.setState({
        clicks: this.state.clicks + 1,
        wasClicked: updateWasClicked,
        message: "That's Correct"
      });
    }

    if (this.state.clicks > this.state.topScore) {
      this.setState({ topScore: this.state.clicks });
    }

    console.log("clicked");
  };

  handleClick() {
    this.setState({});
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Header />
        <Score
          clicks={this.state.clicks}
          message={this.state.message}
          topScore={this.state.topScore}
        />
        <div className="wrapper">
          {mickies.map(mickey => (
            <Card
              key={mickey.id}
              click={this.clickListener}
              image={mickey.image}
              id={mickey.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
