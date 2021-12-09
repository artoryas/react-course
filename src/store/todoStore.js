import { createStore } from "redux";

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'REMOVE_TODO':
            return state.filter(todo => todo !== action.payload);
        default:
            return state;
    }
}

export const todoStore = createStore(todoReducer);