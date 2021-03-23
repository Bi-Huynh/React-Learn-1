import React, { createContext, useEffect, useReducer, useState } from 'react';

export const TodoContext = createContext(null);
TodoContext.displayName = 'TodoContext';

const ACTION_TODO = {
    GET_TODO_COMPLETED: 'getTodoCompleted',
    GET_TODO_NOTCOMPLETED: 'getTodoNotCompleted',
    TODO_COMPLETED: 'todoNotCompleted',
    TODO_COMPLETEDS: 'todoCompleteds',
    ADD_TODO: 'addTodo',
    REMOVE_TODO: 'removeTodo',
    REMOVE_TODOS: 'removeTodos',
};

const todoReducer = (todos, action) => {
    switch (action.type) {
        case ACTION_TODO.GET_TODO_COMPLETED: {
            return todos.filter((todo) => todo.complete); // sai, làm sao để lọc danh sách
        }
        case ACTION_TODO.GET_TODO_NOTCOMPLETED: {
            return todos.filter((todo) => !todo.complete); // sai
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
    const initialTodos = [
        { id: '1616296975705', title: 'Mua bim bim', complete: false },
        { id: '1616296983214', title: 'Mua gạo', complete: false },
        { id: '1616296983657', title: 'Đi đổ xăng', complete: false },
    ];

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
    }, [todos]);

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
