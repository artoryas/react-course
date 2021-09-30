import React from 'react';
import './profile.css';

export default function Profile(props) {
    const {name, age} = props.person;
    console.log("PROFILE - I AM RENDERED")
    return (
        <div className="profile is-bold-text">
            <h1> Hello my name is {name}</h1>
            <div>
                I am {age} years old
            </div>
        </div>
    )
}