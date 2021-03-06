import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {  
    persons: [
      { name: "Alex", age: 30},
      { name: "Max", age: 10},
      { name: "Lauren", age: 60}
     ],
     showPersons: false
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

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  }



  render() { 
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
      <div>
        {this.state.persons.map(person => {
          return <Person 
          name={person.name} 
          age={person.age}
          />
        })}
      </div>
      );
    }
// keep it clean below
    return (  
  <div className="App">
    <h1>Hi Im a react app</h1>
    <h2>its really working</h2>
    <button 
      style={style}
      onClick={this.togglePersonsHandler}>Toggle Persons 
    </button> 
    {persons}
  </div>
  );
  }
}
 
export default App;






