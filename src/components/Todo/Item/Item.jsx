import React, { useContext } from 'react';
import { TodoContext } from '../../../stores/Todo.jsx';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

import './Item.css';
import iconCheckComplete from '../../../image/icon/check-complete.svg';
import iconCheck from '../../../image/icon/check.svg';

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
    const { checkItemComplete } = useContext(TodoContext);

    let classList = ClassNames({
        'todo-item': true,
        complete: item.isComplete,
    });
    let url = item.isComplete ? iconCheckComplete : iconCheck;

    function handleItemClick(item) {
        checkItemComplete(item);
    }

    return (
        <div className={classList}>
            <img
                className="img"
                src={url}
                alt="icon check"
                onClick={() => handleItemClick(item)}
            />
            <p>{item.title}</p>
        </div>
    );
}

export default TodoItem;
