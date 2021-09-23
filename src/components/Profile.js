import './profile.css';

export default function Profile({ name, age }) {
    return (
        <div className="profile">
            <h1>
                My name is {name}
            </h1>
            <p>
                And I am {age} years old
            </p>
        </div>
    )
}