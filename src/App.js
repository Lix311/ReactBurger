import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi Im a react app</h1>
        <h2>its really working</h2>
        <Person />
      </div>
    );
  }
}

export default App;
