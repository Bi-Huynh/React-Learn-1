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
                            onItemClicked={onItemClicked(item, index)}
                        ></TodoItem>
                    );
                })}
        </div>
    );
}

export default TodoList;
