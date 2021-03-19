import React, { useState } from 'react';
import TodoHeader from '../Header/Header.jsx';
import TodoList from '../List.jsx';
import './Card.css';

const isCheckComplete = (newTodoItems) => {
    for (const item of newTodoItems) {
        if (!item.isComplete) {
            return false;
        }
    }
    return true;
};

const TodoCard = () => {
    const [todoItems, setTodoItems] = useState([
        { title: 'Mua bim bim', isComplete: false },
        { title: 'Mua gạo', isComplete: false },
        { title: 'Đi đổ xăng', isComplete: false },
    ]);
    const [isCompleteAllItem, setIsCompleteAllItem] = useState(false);

    const handleTodoSubmitForm = (fromValue) => {
        let newTodo = JSON.parse(JSON.stringify(fromValue));
        let newTodoItems = JSON.parse(JSON.stringify(todoItems));
        newTodoItems.unshift(newTodo);
        setTodoItems(newTodoItems);
    };

    const handleTodoItemClicked = (item) => {
        let index = todoItems.indexOf(item);
        if (index < 0) return;

        let newTodoItems = JSON.parse(JSON.stringify(todoItems));
        newTodoItems[index].isComplete = !item.isComplete;
        setTodoItems(newTodoItems);
        // console.log('item check', newTodoItems);
        // console.log(isCheckComplete(newTodoItems));
        setIsCompleteAllItem(!isCheckComplete(newTodoItems));
        // nó không render lại cái icon
    };

    const handleCheckedAllTodoComplete = () => {
        let listTodoItems = JSON.parse(JSON.stringify(todoItems));
        let newTodoItems = listTodoItems.map((todoItem) => {
            todoItem.isComplete = !isCompleteAllItem;
            return todoItem;
        });
        setTodoItems(newTodoItems);
        setIsCompleteAllItem(!isCompleteAllItem);
        console.log('all check', newTodoItems);
    };

    return (
        <div className="todo-card">
            <TodoHeader
                isCompleteAllItem={isCompleteAllItem}
                onAllTodoComplete={handleCheckedAllTodoComplete}
                onSubmitted={handleTodoSubmitForm}
            ></TodoHeader>
            <TodoList
                todoItems={todoItems}
                onTodoItemClicked={handleTodoItemClicked}
            ></TodoList>
        </div>
    );
};

export default TodoCard;
