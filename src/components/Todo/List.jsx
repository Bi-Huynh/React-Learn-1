import TodoItem from './Item/Item.jsx';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoItems: PropTypes.array,
    onTodoItemClicked: PropTypes.func,
};

TodoList.propTypesDefault = {
    todoItems: [],
    onTodoItemClicked: null,
};

function TodoList(props) {
    const { todoItems, onTodoItemClicked } = props;
    return (
        <div className="todo-list">
            {todoItems.length > 0 &&
                todoItems.map((item, index) => (
                    <TodoItem
                        key={index}
                        item={item}
                        onTodoItemClicked={onTodoItemClicked}
                        // vì thằng item nó cần thằng này nhưng list thì lại không cần
                        // nên nó bị dư thừa, để giải quyết thì dùng context
                    ></TodoItem>
                ))}
        </div>
    );
}

export default TodoList;
