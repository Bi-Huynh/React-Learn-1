import { useContext } from 'react';
import { TodoContext } from '../../stores/Todo.jsx';
import TodoItem from './Item/Item.jsx';

const TodoList = () => {
    // trả về 1 object, vào object đó tìm thằng todo, và lấy cái todoItems trả về
    const {
        todos,
        filter: { filter },
    } = useContext(TodoContext);
    let todoList = [];
    let amount = todos.length;

    switch (filter) {
        case 'Completed':
            todoList = todos.filter((todo) => todo.complete);
            break;
        case 'Not Completed':
            todoList = todos.filter((todo) => !todo.complete);
            break;

        default:
            todoList = JSON.parse(JSON.stringify(todos));
            break;
    }

    return (
        <div className="todo-list">
            {amount > 0 &&
                todoList.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            item={todo}
                            // vì thằng item nó cần thằng này nhưng list thì lại không cần
                            // nên nó bị dư thừa, để giải quyết thì dùng context
                        ></TodoItem>
                    );
                })}
            {amount <= 0 && <TodoItem></TodoItem>}
        </div>
    );
};

export default TodoList;
