import React, { createContext, useEffect, useReducer, useState } from 'react';
// import '../webpack.config.js';
// import '../.env';
require('dotenv').config();

export const TodoContext = createContext(null);
TodoContext.displayName = 'TodoContext';

// Dotenv.config();

const ACTION_TODO = {
    TODO_RESET: 'todoReset',
    TODO_COMPLETED: 'todoNotCompleted',
    TODO_COMPLETEDS: 'todoCompleteds',
    ADD_TODO: 'addTodo',
    REMOVE_TODO: 'removeTodo',
    REMOVE_TODOS: 'removeTodos',
};

const todoReducer = (todos, action) => {
    switch (action.type) {
        case ACTION_TODO.TODO_RESET: {
            return action.payload;
        }
        case ACTION_TODO.TODO_COMPLETED: {
            return todos.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, complete: !todo.complete };
                }
                return todo;
            });
        }
        case ACTION_TODO.TODO_COMPLETEDS: {
            return todos.map((todo) => ({ ...todo, complete: !todo.complete }));
        }
        case ACTION_TODO.ADD_TODO: {
            return [action.newTodo, ...todos];
        }
        case ACTION_TODO.REMOVE_TODO: {
            return todos.filter((todo) => todo.id !== action.id);
        }
        case ACTION_TODO.REMOVE_TODOS: {
            return todos.filter((todo) => !todo.complete);
        }
        default:
            return todos;
    }
};

const TodoProvider = ({ children }) => {
    const initialTodos = [];

    const [todos, dispatch] = useReducer(todoReducer, initialTodos);
    const [isCheckedAll, setIsCheckedAll] = useState(false);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        if (todos.length <= 0 || !todos) return;

        let amountCompleted = todos.filter((todo) => todo.complete).length;
        if (todos.length === amountCompleted) {
            setIsCheckedAll(true);
        } else {
            setIsCheckedAll(false);
        }
        localStorage.setItem(process.env.REACT_APP_TODO, JSON.stringify(todos));
    }, [todos]);

    useEffect(() => {
        const raw = JSON.parse(
            localStorage.getItem(process.env.REACT_APP_TODO)
        );
        dispatch({ type: ACTION_TODO.TODO_RESET, payload: raw });
    }, []);

    const stores = {
        todos: todos,
        dispatch,
        filter: { filter, setFilter },
        checkAll: { isCheckedAll, setIsCheckedAll },
    };

    return (
        <TodoContext.Provider value={stores}>{children}</TodoContext.Provider>
    );
};

export { TodoProvider, ACTION_TODO };
