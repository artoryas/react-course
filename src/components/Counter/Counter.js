import { useState, useEffect } from "react";
import './counter.css';

export default function Counter() {
    const [count, setCount] = useState(0);

    function decrement() {
        setCount(count => count - 1);
    }

    function increment() {
        setCount(count => count + 1);
    }

    useEffect(() => {
        document.title = `Current count is: ${count}`
    }, [count]);

    return (
        <div className="container">
            <h1>Current count is: {count}</h1>
            <div className="d-flex">
                <button className="btn btn-primary" onClick={decrement}>Decrement</button>
                <button className="btn btn-primary" onClick={increment}>Increment</button>
            </div>
        </div>
    )
}