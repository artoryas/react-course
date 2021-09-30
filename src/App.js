import React from 'react';
import Counter from './components/Counter/Counter';
import Profile from './components/Profile/Profile.jsx';

export default class App extends React.Component {
  state = {
    persons: [
      {
        name: "Alex",
        surname: "Johnson",
        age: 21,
        skills: ["HTML", 'CSS', "JS"],   
      },
      {
        name: "Jackson",
        surname: "Johnson",
        age: 35,
        skills: ["Python", 'Java', "SQL"],   
      }
    ]
  }

  render() {
    const updatePersonsName = () => {
      this.setState((prevState) => {
        return {
          persons: prevState.persons.map((person) => {
            if (person.name === "Alex") {
              person.name = "Tyler";
              return person;
            }
            return person;
          })
        }
      })
    }

    return (
      <React.Fragment>
        {
          this.state.persons.map((person, index) => (
            <Profile key={index} person={person} />
          ))
        }
        <button onClick={updatePersonsName}>Change the person's name</button>
        <Counter />
      </React.Fragment>
    )
  }
}