import React from 'react';
import SocialMediaPage from './components/SocialMediaPage/SocialMediaPage';

export default class App extends React.Component {
  state = {
    person: {
      name: 'Alex',
      age: 21
    },
    showSocialMedia: true
  }

  updatePerson = () => {
    this.setState({person: {
      name: 'Martha',
      age: 25
    }})
  }

  render() {
    return (
      <React.Fragment>
        {this.state.showSocialMedia && <SocialMediaPage username={this.state.person.name}/>}
        
        <button onClick={() => this.setState({showSocialMedia: false})}>
          Remove social media page
        </button>
      </React.Fragment>
    )
  }
}