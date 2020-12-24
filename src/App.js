import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  
const [personsState, setPersonsState] = useState({
  persons: [
      { name: "Alex", age: 30},
      { name: "Max", age: 10},
      { name: "Lauren", age: 60}
     ]
    });

     const switchNameHandler = () => {
      //console.log('was clicked');
      setPersonsState({
        persons: [
        { name: "Alexander", age: 30},
        { name: "Maximilian", age: 10},
        { name: "Lauren", age: 60}
      ]
    })
    }
  
    return (
      <div className="App">
        <h1>Hi Im a react app</h1>
        <h2>its really working</h2>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );
  }



export default app;


