import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Content.css';

export default function Content() {
    const todoList = useSelector(state => state);
    const dispatch = useDispatch();
    const isDarkTheme = true;
    const [text, setText] = useState('');

    function onAdd() {
        dispatch({
            type: 'ADD_TODO',
            payload: text
        });
        setText('');
    }

    return (
        <section className={ isDarkTheme ? "dark-theme" : ""}>
            <div className="container">
                <div className={ isDarkTheme ? "card dark-card" : "card"}>
                    <div className="d-flex">
                        <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
                        <button className="btn btn-primary ml-3" onClick={onAdd}>ADD TODO</button>
                    </div>
                    <ul>
                        {todoList.map(todo => (
                            <li key={todo}>
                                {todo}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}