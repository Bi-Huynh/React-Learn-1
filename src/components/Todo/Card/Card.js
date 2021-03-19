import React, { useState } from 'react';
import TodoHeader from '../Header/Header.js';
import TodoList from '../List.js';

import './Card.css';

const TodoCard = () => {
    const [todoItems, setTodoItems] = useState([
        { title: 'Mua bim bim', isComplete: false },
        { title: 'Mua gạo', isComplete: false },
        { title: 'Đi đổ xăng', isComplete: false },
    ]);

    const onKeyEnter = (event) => {
        let contentTodo = event.target.value.trim();
        if (contentTodo !== '' && event.key === 'Enter') {
            setTodoItems([
                { title: contentTodo, isComplete: false },
                ...todoItems,
            ]);
            event.target.value = '';
        }
    };

    const onItemClicked = (item, index) => {
        return (event) => {
            let isComplete = item.isComplete;
            setTodoItems([
                ...todoItems.slice(0, index),
                { ...item, isComplete: !isComplete },
                ...todoItems.slice(index + 1),
            ]);
        };
    };

    const onAllComplete = () => {
        setTodoItems([...todoItems]);
    };

    return (
        <div className="todo-card">
            <TodoHeader
                onAllComplete={onAllComplete}
                onKeyEnter={onKeyEnter}
            ></TodoHeader>
            <TodoList
                todoItems={todoItems}
                onItemClicked={onItemClicked}
            ></TodoList>
        </div>
    );
};

export default TodoCard;
