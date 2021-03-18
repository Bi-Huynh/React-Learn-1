// @flow
import TodoItem from './Item/Item.js';

type Props = {
    todoItems: Array<Object>,
    onItemClicked: Function,
};

function TodoList(props: Props) {
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
