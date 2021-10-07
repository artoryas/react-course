import React from 'react';
import './profile.css';

export default function Profile(props) {
    console.log("PROFILE - I AM RENDERED")
    return (
        <div className="profile is-bold-text">
            <h1> Hello my name is {props.name}</h1>
            <div>
                I am {props.age} years old
            </div>
        </div>
    )
}