import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import iconCheckComplete from '../../../image/icon/check-complete.svg';
import iconCheck from '../../../image/icon/check.svg';
import { TodoContext } from '../../../stores/Todo.jsx';
import './Item.css';

TodoItem.propTypes = {
    item: PropTypes.object,
};

TodoItem.defaultProps = {
    item: {
        title: 'No todo yet',
        isComplete: false,
    },
};

function TodoItem(props) {
    const { item } = props;
    const {
        todo: { todoItems, setTodoItems },
        // isCheckAll: { setIsItemsCheckAll },
    } = useContext(TodoContext);

    let classList = ClassNames({
        'todo-item': true,
        complete: item.isComplete,
    });
    let url = item.isComplete ? iconCheckComplete : iconCheck;

    const handleItemClick = () => {
        let index = todoItems.findIndex((todoItem) => todoItem.id === item.id);
        if (index === -1) {
            console.log('không tìm được vị trí của item đã bấm');
            return;
        }
        const list = JSON.parse(JSON.stringify(todoItems));
        list[index].isComplete = !item.isComplete;
        setTodoItems(list);

        // không hay cho lắm
        // const listTodo = JSON.parse(JSON.stringify(todoItems));
        // let countItemCompleted = 0;
        // let flag = false;
        // for (const todoItem of listTodo) {
        //     if (todoItem.id === item.id) {
        //         todoItem.isComplete = !item.isComplete;
        //         flag = true;
        //     }
        //     if (todoItem.isComplete) {
        //         countItemCompleted++;
        //     }
        // }
        // if (!flag) {
        //     console.log('không tìm được vị trí của item đã bấm');
        // } else {
        //     setTodoItems(listTodo);
        //     if (countItemCompleted === listTodo.length) {
        //         setIsItemsCheckAll(false);
        //     } else {
        //         setIsItemsCheckAll(true);
        //     }
        // }
    };

    return (
        <div className={classList}>
            <img
                className="img"
                src={url}
                alt="icon check"
                onClick={handleItemClick}
            />
            <p>{item.title}</p>
        </div>
    );
}

export default TodoItem;
