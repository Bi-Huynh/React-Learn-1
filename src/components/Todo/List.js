import TodoItem from './Item/Item.js';

function TodoList(props) {
    const { todoItems, onItemClicked } = props;
    return (
        <div className="todo-list">
            {todoItems.length > 0 &&
                todoItems.map((item, index) => {
                    return (
                        <TodoItem
                            key={index}
                            item={item}
                            onItemClicked={onItemClicked}
                            // vì thằng item nó cần thằng này nhưng list thì lại không cần
                            // nên nó bị dư thừa, để giải quyết thì dùng context
                        ></TodoItem>
                    );
                })}
        </div>
    );
}

export default TodoList;
