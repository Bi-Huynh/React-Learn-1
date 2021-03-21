import { useContext } from 'react';
import { TodoContext } from '../../stores/Todo.jsx';
import TodoItem from './Item/Item.jsx';

function TodoList() {
    const {
        todo: { getTodoItems },
    } = useContext(TodoContext);
    // trả về 1 object, vào object đó tìm thằng todo, và lấy cái todoItems trả về

    return (
        <div className="todo-list">
            {getTodoItems().length > 0 &&
                getTodoItems().map((item) => {
                    return (
                        <TodoItem
                            key={item.id}
                            item={item}
                            // vì thằng item nó cần thằng này nhưng list thì lại không cần
                            // nên nó bị dư thừa, để giải quyết thì dùng context
                        ></TodoItem>
                    );
                })}
        </div>
    );
}

export default TodoList;
