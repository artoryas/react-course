import {useState, useReducer, useEffect , useRef} from 'react';
import { getProfileDate } from '../../utils/api';

import './profile.css';

function reducer(state, action) {
    switch (action.type) {
        case 'loading': 
            return { loading: true, currentPerson: null};
        case 'fetched': 
            return { loading: false, currentPerson: action.payload};
        default :
            throw new Error('Undefined value')
    }
}

// useState -> preserve value between re renders and TRIGGER re-render
// useRef -> preserve value betweem re renders

export default function Profile(props) {
    //const [currentIndex, setCurrentIndex] = useState(null);
    
    const inputRef = useRef(null);
    const clicked = useRef(null);
    const [state, dispatch] = useReducer(reducer, {
        loading: false, currentPerson: null
    })

    function updateProfile(id) {
        if (clicked.current) {
            console.log('submitting form..')
        } else {
            console.log('validation error')
        }
        
        dispatch({type: 'loading'});
        getProfileDate(id).then((person) => {
            dispatch({type: 'fetched', payload: person})
        })
        .catch((reason) => console.log(reason))
    }

    // useEffect(() => {
    //     updateProfile(currentIndex);
    // }, [currentIndex]);

    return (
        <div className="container mt-5">
            {state.loading && <h1>Loading...</h1>}
            {state.currentPerson && (
                <div className="card">
                    <div className="card-body">
                        <h2>Name: {state.currentPerson.name}</h2>
                        <p>Age: {state.currentPerson.age}</p>
                    </div>
                </div>
            )}
            <input type="text" ref={inputRef} />
            <div className="box" onClick={() => clicked.current = true}></div>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><button class="page-link" onClick={() => updateProfile(0)}>1</button></li>
                    <li class="page-item"><button class="page-link" onClick={() => updateProfile(1)}>2</button></li>
                    <li class="page-item"><button class="page-link" onClick={() => updateProfile(2)}>3</button></li>
                    <li class="page-item"><button class="page-link" onClick={() => updateProfile(3)}>4</button></li>
                    <li class="page-item"><button class="page-link" onClick={() => updateProfile(4)}>5</button></li>
                </ul>
            </nav>
        </div>
        
    )
}   