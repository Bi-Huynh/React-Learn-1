import React, { useState } from 'react';
import TodoHeader from '../Header/Header.jsx';
import TodoList from '../List.jsx';
import './Card.css';

const isCheckedAll = (todoItems) => {
    for (const item of todoItems) {
        if (!item.isComplete) {
            return false;
        }
    }
    return true;
};

const TodoCard = () => {
    const [todoItems, setTodoItems] = useState([
        { id: 1, title: 'Mua bim bim', isComplete: false },
        { id: 2, title: 'Mua gạo', isComplete: false },
        { id: 3, title: 'Đi đổ xăng', isComplete: false },
    ]);
    const [isCompleteAllItem, setIsCompleteAllItem] = useState(false);

    const handleSubmitFromTodo = (valueTodo = {}) => {
        let value = JSON.parse(JSON.stringify(valueTodo));

        console.log(value);
        let newTodoItems = JSON.parse(JSON.stringify(todoItems));

        newTodoItems.unshift(value);
        setTodoItems(newTodoItems);

        setIsCompleteAllItem(isCheckedAll(newTodoItems));
    };

    const handleItemClicked = (item = {}) => {
        let index = todoItems.indexOf(item);
        if (index < 0) return;

        let isComplete = item.isComplete;
        let newTodoItems = JSON.parse(JSON.stringify(todoItems));
        newTodoItems[index].isComplete = !isComplete;
        setTodoItems(newTodoItems);

        // kiểm tra xem có phải tất cả đã check hay không
        // nếu không thì bỏ check all và ngược lại

        setIsCompleteAllItem(isCheckedAll(newTodoItems));
    };

    const handleCheckAllComplete = () => {
        let newTodoItems = JSON.parse(JSON.stringify(todoItems));
        newTodoItems.map((item) => (item.isComplete = !isCompleteAllItem));
        setIsCompleteAllItem(!isCompleteAllItem);
        setTodoItems(newTodoItems);
    };

    return (
        <div className="todo-card">
            <TodoHeader
                isCompleteAllItem={isCompleteAllItem}
                onCheckAllComplete={handleCheckAllComplete}
                onSubmitFrom={handleSubmitFromTodo}
            ></TodoHeader>
            <TodoList
                todoItems={todoItems}
                onItemClicked={handleItemClicked}
            ></TodoList>
        </div>
    );
};

export default TodoCard;
