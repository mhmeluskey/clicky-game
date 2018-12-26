import React, { Component } from "react";
import MickeyCard from "./components/MickeyCard/MickeyCard";
import Header from "./components/Header";
import Score from "./components/Score";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Score />
        <MickeyCard />
      </div>
    );
  }
}

export default App;
