import React, { Component } from "react";
import mickey from "./mickey.json";
import MickeyCard from "./components/MickeyCard/MickeyCard";
import Wrapper from "./components/Wrapper";

class App extends Component {
  state = {
    mickey
  };

  render() {
    return (
      <Wrapper>
        {this.state.mickey.map(mickey => (
          <MickeyCard key={mickey.id} image={mickey.image} />
        ))}
      </Wrapper>
    );
  }
}
export default App;
