import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi Im a react app</h1>
        <h2>its really working</h2>
        <Person name="Alex" age="30" />
        <Person name="Max" age="30"/>
        <Person name="Lauren" age="60"/>
        <Person name="Peter" age="60"/>
      </div>
    );
  }
}

export default App;
