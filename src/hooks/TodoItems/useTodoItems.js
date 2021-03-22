import { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../../stores/Todo.jsx';

const useGetTodoItems = (filterValue) => {
    const {
        todo: { todoItems },
        filter: { filtering },
    } = useContext(TodoContext);
    const [newTodoItems, setNewTodoItems] = useState([]);

    useEffect(() => {
        let list = [];
        switch (filtering) {
            case 'Not Complete':
                list = todoItems.filter((item) => item.isComplete === false);
                setNewTodoItems(list);
                break;

            case 'Complete':
                list = todoItems.filter((item) => item.isComplete === true);
                setNewTodoItems(list);
                break;

            default:
                list = JSON.parse(JSON.stringify(todoItems));
                setNewTodoItems(list);
                break;
        }
    }, [filtering, todoItems]);

    return newTodoItems;
};

export { useGetTodoItems };
