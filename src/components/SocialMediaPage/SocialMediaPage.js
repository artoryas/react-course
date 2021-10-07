import React from "react";

export default class SocialMediaPage extends React.Component {
    state = {
        username: this.props.username
    }
    interval;

    componentDidMount = () => {
       this.interval = setInterval(() => {
           console.count('Getting new data...')
       }, 2000)
    }

    componentWillUnmount = () => {
        clearInterval(this.interval);
    }

    render() {
        console.log(this.props)
        return (
            <h1>Social media username: {this.state.username}</h1>
        )
    }
}