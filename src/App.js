import React, { Component } from "react";
import mickey from "./mickey.json";
import MickeyCard from "./components/MickeyCard/MickeyCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Score from "./components/Score";

class App extends Component {
  state = {
    mickey
  };

  render() {
    return (
      <div>
        <Header />
        <Score />
        <Wrapper>
          {this.state.mickey.map(mickey => (
            <MickeyCard key={mickey.id} image={mickey.image} />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
