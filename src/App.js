import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Alex", age: 30},
      { name: "Max", age: 10},
      { name: "Lauren", age: 60}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hi Im a react app</h1>
        <h2>its really working</h2>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
