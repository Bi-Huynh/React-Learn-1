import { useContext } from 'react';
import { TodoContext } from '../../stores/Todo.jsx';

// const todoFilterCompleted = (value) => {
//     return todoItems.filter((item) => item.isComplete === value);
// };

const useGetTodoItems = (filter) => {
    const {
        todo2: { todoItems },
    } = useContext(TodoContext);
    let newTodoItems = [];

    console.log('useGetTodoItems', todoItems);

    switch (filter) {
        case 'Not Complete':
            newTodoItems = todoItems.filter(
                (item) => item.isComplete === false
            );
            break;

        case 'Complete':
            newTodoItems = todoItems.filter((item) => item.isComplete === true);
            break;

        default:
            newTodoItems = JSON.parse(JSON.stringify(todoItems));
            break;
    }

    return newTodoItems;
};

export { useGetTodoItems };
