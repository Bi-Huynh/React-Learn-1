import React, { createContext, useState } from 'react';

export const TodoContext = createContext(null);
TodoContext.displayName = 'TodoContext';

const TodoProvider = ({ children }) => {
    const items = [
        { id: '1616296975705', title: 'Mua bim bim', isComplete: false },
        { id: '1616296983214', title: 'Mua gạo', isComplete: false },
        { id: '1616296983657', title: 'Đi đổ xăng', isComplete: false },
    ];
    const [todoItems, setTodoItems] = useState(items);
    const [isItemsCheckAll, setIsItemsCheckAll] = useState(true);
    const [filtering, setFiltering] = useState('All');

    // const [itemIndex, setItemIndex] = useState(-1);

    // useEffect(() => {
    // setFiltering('All');
    // setTodoItems([
    //     { id: '1616296975705', title: 'Mua bim bim', isComplete: false },
    //     { id: '1616296983214', title: 'Mua gạo', isComplete: false },
    //     { id: '1616296983657', title: 'Đi đổ xăng', isComplete: false },
    // ]);
    // }, []);

    // const getTodoItemsComplete = (newTodoItems) => {
    //     // nếu lấy thằng todoItems thì do nó cập nhật bị chậm nên k lấy chính sác được
    //     return newTodoItems.filter((todoItem) => todoItem.isComplete);
    // };

    // const todoFilterCompleted = (value) => {
    //     return todoItems.filter((item) => item.isComplete === value);
    // };

    // const getTodoItems = () => {
    //     let newTodoItems = [];
    //     switch (filter) {
    //         case 'Not':
    //             newTodoItems = todoFilterCompleted(false);
    //             break;
    //         case 'Comp':
    //             newTodoItems = todoFilterCompleted(true);
    //             break;

    //         default:
    //             newTodoItems = JSON.parse(JSON.stringify(todoItems));
    //             break;
    //     }
    //     return newTodoItems;
    // };

    // const handleCheckAllComplete = () => {
    //     let isCheckAll = isCompleteAllItem;

    //     if (!todoItems && todoItems.length === 0) return;

    //     let newTodoItems = todoItems.map((item) => {
    //         return {
    //             ...item,
    //             isComplete: !isCheckAll,
    //         };
    //     });

    //     setIsCompleteAllItem(!isCheckAll);
    //     setTodoItems(newTodoItems);
    // };

    // const handleCheckItemComplete = (item) => {
    //     let index = todoItems.findIndex((todoItem) => todoItem.id === item.id);
    //     if (index === -1) {
    //         console.log('không tìm được vị trí của item đã bấm');
    //         return;
    //     }
    //     let newTodoItems = JSON.parse(JSON.stringify(todoItems));
    //     newTodoItems[index].isComplete = !item.isComplete;
    //     setTodoItems(newTodoItems);

    //     getTodoItemsComplete(newTodoItems).length === newTodoItems.length
    //         ? setIsCompleteAllItem(true)
    //         : setIsCompleteAllItem(false);
    // };

    // const handleCreateTodoItem = (valueTodo = {}) => {
    //     let value = { ...valueTodo };

    //     let newTodoItems = JSON.parse(JSON.stringify(todoItems));

    //     newTodoItems.unshift(value);
    //     setTodoItems(newTodoItems);

    //     getTodoItemsComplete(newTodoItems).length === newTodoItems.length
    //         ? setIsCompleteAllItem(true)
    //         : setIsCompleteAllItem(false);
    // };

    // const handleRemoveTodoComplete = () => {
    //     let newTodoItems = todoFilterCompleted(false);
    //     // lấy ra danh sách những thằng chưa được complete
    //     // và gán lại cho danh sách chính thì bỏ được những thằng đã complete
    //     setTodoItems(newTodoItems);
    // };

    const store = {
        todo: { todoItems, setTodoItems },
        isCheckAll: { isItemsCheckAll, setIsItemsCheckAll },
        filter: { filtering, setFiltering },
    };

    return (
        <TodoContext.Provider value={store}>{children}</TodoContext.Provider>
    );
};

export default TodoProvider;
