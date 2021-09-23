import React from 'react';
import Profile from './components/Profile';

export default class App extends React.Component {
  state = {
    message: 'Hello world!'
  }

  render() {
    const arrayOfCities = ['London', 'New-York', 'Astana'];
    const profiles = [
      {
        id: 1,
        name: 'Martha',
        age: 25
      },
      {
        id: 2,
        name: 'Alex',
        age: 20
      },
      {
        id: 3,
        name: 'John',
        age: 45
      },
      {
        id: 4,
        name: 'Alice',
        age: 18
      }
    ];

    return (
      <React.Fragment>
        <h1>
          {this.state.message}
        </h1>
        <button onClick={() => this.setState({message: 'Changed by setState'})}>
          Click me
        </button>
        {
          arrayOfCities.map((city, index) => (
            <li key={index}>
              {city}
            </li>
          ))
        }
        {
          profiles.map((person, index) => (
            <Profile 
              name={person.name} 
              age={person.age}
              key={index} />
          ))
        }
      </React.Fragment>
    )
  }
}