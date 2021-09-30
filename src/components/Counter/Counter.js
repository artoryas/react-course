import React from "react";
import './counter.css';

export default class Counter extends React.Component {
    state = {
        count: 0,
        anotherVar: 'asd'
    }

    render() {
        console.log("COUNTER - sI AM RENDERED");

        const increment = () => {
            this.setState((prevState) => ({
                count: prevState.count + 1
            }));

            // if we want to change value which IS NOT depends on prev state the use object
            // this.setState({
            //     count: Math.random(1)
            // })
        }

        const decrement = () => {
            // first way
            this.setState((prevState) => {
                return {
                    count: prevState.count - 1
                }
            })

            // second way
            // this.setState((prevState) => ({
            //         count: prevState.count - 1
            //     })
            // )
        }

        return (
            <div className="wrapper">
                <h1>Current count is {this.state.count}</h1>
                <button onClick={increment}>
                    Add +1
                </button>
                <button onClick={decrement}>
                    Remove -1
                </button>
            </div>
        )
    }
}