import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import iconCheckComplete from '../../../image/icon/check-complete.svg';
import iconCheck from '../../../image/icon/check.svg';
import { ACTION_TODO, TodoContext } from '../../../stores/Todo.jsx';
import './Item.css';

TodoItem.propTypes = {
    item: PropTypes.object,
};

TodoItem.defaultProps = {
    item: {
        id: new Date().getTime(),
        title: 'There are no todo yet',
        isComplete: false,
    },
};

function TodoItem({ item }) {
    const { dispatch } = useContext(TodoContext);

    let classList = ClassNames({
        'todo-item': true,
        complete: item.complete,
    });
    let url = item.complete ? iconCheckComplete : iconCheck;

    const handleItemClick = () => {
        dispatch({ type: ACTION_TODO.TODO_COMPLETED, id: item.id });
    };

    return (
        <div className={classList}>
            <img className="img" src={url} onClick={handleItemClick} />
            <p>{item.title}</p>
        </div>
    );
}

export default TodoItem;
