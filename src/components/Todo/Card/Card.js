import React, { useState } from 'react';
import TodoHeader from '../Header/Header.js';
import TodoList from '../List.js';
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

    const onKeyEnter = (event) => {
        let contentTodo = event.target.value.trim();
        if (contentTodo !== '' && event.key === 'Enter') {
            let newTodoItems = JSON.parse(JSON.stringify(todoItems));
            newTodoItems.unshift({ title: contentTodo, isComplete: false });
            setTodoItems(newTodoItems);
            event.target.value = '';

            isCheckedAll(newTodoItems)
                ? setIsCompleteAllItem(true)
                : setIsCompleteAllItem(false);
            // if (isCheckedAll(newTodoItems)) {
            //     setIsCompleteAllItem(true);
            // }
        }
    };

    const onItemClicked = (item) => {
        let index = todoItems.indexOf(item);
        if (index < 0) return;

        let isComplete = item.isComplete;
        let newTodoItems = JSON.parse(JSON.stringify(todoItems));
        newTodoItems[index].isComplete = !isComplete;
        setTodoItems(newTodoItems);

        // kiểm tra xem có phải tất cả đã check hay không
        // nếu không thì bỏ check all và ngược lại
        isCheckedAll(newTodoItems)
            ? setIsCompleteAllItem(true)
            : setIsCompleteAllItem(false);
        // if (isCheckedAll(newTodoItems)) {
        //     setIsCompleteAllItem(true);
        // }
    };

    const onAllComplete = () => {
        let newTodoItems = JSON.parse(JSON.stringify(todoItems));
        newTodoItems.map((item) => (item.isComplete = !isCompleteAllItem));
        setIsCompleteAllItem(!isCompleteAllItem);
        setTodoItems(newTodoItems);
    };

    return (
        <div className="todo-card">
            <TodoHeader
                isCompleteAllItem={isCompleteAllItem}
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
