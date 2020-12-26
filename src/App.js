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

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 30},
        { name: "Maximilian", age: 10},
        { name: "Lauren", age: 60}
      ]
    })
  }

  switchPersonsName = (event) => {
    this.setState({persons: [
      { name: "Alex", age: 30},
      { name: event.target.value, age: 10},
      { name: "Lauren", age: 60}
    ]
  })
  }



  render() { 
    return (  
  <div className="App">
    <h1>Hi Im a react app</h1>
    <h2>its really working</h2>
    <button onClick={this.switchNameHandler.bind(this, 'Alexander')}>Switch Name</button>
    <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age} 
      click={() => this.switchNameHandler('Alex')}/>
    <Person 
      changed={this.switchPersonsName}
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age} />
    <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age} />
  </div>
  );
  }
}
 
export default App;






