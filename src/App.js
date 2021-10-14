import React from 'react';

import { sendDataToAPI } from './utils/api';
import './App.css';
import Post from './components/Post/Post';

export default class App extends React.Component {
  state = {
    username: '',
    password: '',
    city: '',
    posts: [],
    loading: true,
    isFormActive: false
  }

  componentDidMount = () => {
    let postLimit = 10;
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${postLimit}`)
      .then((raw) => raw.json())
      .then(res => this.setState({posts: res}));

    setTimeout(() => {
      this.setState({isFormActive: true})
    }, 3000)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.username.length && this.state.password.length && this.state.city.length){
      sendDataToAPI(this.state)
        .then(res => {
          if (!res.status.ok){
            throw new Error(res.errorMessage)
          }
          this.setState({data: res})
        })
        .catch((error) => {
          console.error(error.message)
        })
        .finally(() => {
          console.log('I will be called no matter what')
        })
    } else {
      alert('FILL EVERY FIELD')
    }
  }

  render() {
    return (
      <React.Fragment>
        <form 
          className={this.state.isFormActive ? "card card-body active" : "card card-body"} 
          style={
            {
              background: this.state.isFormActive ? "chocolate" : "transparent"
            }
          }
          onSubmit={this.handleSubmit}>
          <div className="mt-3">
            <label htmlFor="username" className="label-control">
              Username
            </label>
            <input 
              type="text" 
              className="form-control" 
              id="username" 
              value={this.state.username} 
              onChange={(event) => this.setState({username: event.target.value})} />
          </div>
          <div className="mt-3">
            <label htmlFor="password" className="label-control">
              Password
            </label>
            <input 
              type="password" 
              className="form-control" 
              id="password"
              value={this.state.password} 
              onChange={(event) => this.setState({password: event.target.value})} />
          </div>
          <div className="mt-3">
            <label htmlFor="city" className="label-control">
              City
            </label>
            <input 
              type="text" 
              className="form-control" 
              id="city"
              value={this.state.city} 
              onChange={(event) => this.setState({city: event.target.value})} />
          </div>
          <button type="submit" className="btn btn-primary mt-5">
            Register now!
          </button>
        </form>
        {this.state.loading ? 
          <h1>Loading...</h1> : 
          this.state.posts.map(post => (
            <Post key={post.id} post={post} />
          ))
        }
      </React.Fragment>
    )
  }
}