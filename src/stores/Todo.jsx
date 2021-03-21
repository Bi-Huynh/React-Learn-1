import React, { createContext, useState } from 'react';

export const TodoContext = createContext(null);

const TodoProvider = ({ children }) => {
    const items = [
        { id: '1616296975705', title: 'Mua bim bim', isComplete: false },
        { id: '1616296983214', title: 'Mua gạo', isComplete: false },
        { id: '1616296983657', title: 'Đi đổ xăng', isComplete: false },
    ];

    const [todoItems, setTodoItems] = useState(items);
    const [isCompleteAllItem, setIsCompleteAllItem] = useState(false);

    const getTodoItemsComplete = (newTodoItems) => {
        // nếu lấy thằng todoItems thì do nó cập nhật bị chậm nên k lấy chính sác được
        return newTodoItems.filter((todoItem) => todoItem.isComplete);
    };

    const handleCheckAllComplete = () => {
        let isCheckAll = isCompleteAllItem;

        if (!todoItems && todoItems.length === 0) return;

        let newTodoItems = todoItems.map((item) => {
            return {
                ...item,
                isComplete: !isCheckAll,
            };
        });

        setIsCompleteAllItem(!isCheckAll);
        setTodoItems(newTodoItems);
    };

    const handleCheckItemComplete = (item) => {
        let index = todoItems.indexOf(item);
        if (index === -1) {
            return;
        }
        let newTodoItems = JSON.parse(JSON.stringify(todoItems));
        newTodoItems[index].isComplete = !item.isComplete;
        setTodoItems(newTodoItems);

        getTodoItemsComplete(newTodoItems).length === newTodoItems.length
            ? setIsCompleteAllItem(true)
            : setIsCompleteAllItem(false);
    };

    const handleCreateTodoItem = (valueTodo = {}) => {
        let value = { ...valueTodo };

        let newTodoItems = JSON.parse(JSON.stringify(todoItems));

        newTodoItems.unshift(value);
        setTodoItems(newTodoItems);

        getTodoItemsComplete(newTodoItems).length === newTodoItems.length
            ? setIsCompleteAllItem(true)
            : setIsCompleteAllItem(false);
    };

    const store = {
        todo: { todoItems, setTodoItems },
        isCompleteAllItem: { isCompleteAllItem, setIsCompleteAllItem },
        checkAllComplete: handleCheckAllComplete,
        checkItemComplete: handleCheckItemComplete,
        createTodoItem: handleCreateTodoItem,
    };

    return (
        <TodoContext.Provider value={store}>{children}</TodoContext.Provider>
    );
};

export default TodoProvider;
