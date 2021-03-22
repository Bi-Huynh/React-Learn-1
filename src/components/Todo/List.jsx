import { useGetTodoItems } from '../../hooks/TodoItems/useTodoItems';
import TodoItem from './Item/Item.jsx';

function TodoList() {
    // trả về 1 object, vào object đó tìm thằng todo, và lấy cái todoItems trả về
    let todoItems = useGetTodoItems();
    let amount = todoItems.length;

    return (
        <div className="todo-list">
            {amount > 0 &&
                todoItems.map((item) => {
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
