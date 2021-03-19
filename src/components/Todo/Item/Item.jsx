import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import * as React from 'react';
import iconCheckComplete from '../../../image/icon/check-complete.svg';
import iconCheck from '../../../image/icon/check.svg';
import './Item.css';

TodoItem.propTypes = {
    item: PropTypes.object,
    onTodoItemClicked: PropTypes.func,
};

TodoItem.propTypesDefault = {
    item: {},
    onTodoItemClicked: null,
};

function TodoItem(props) {
    const { item, onTodoItemClicked } = props;
    let classList = ClassNames({
        'todo-item': true,
        complete: item.isComplete,
    });
    let url = item.isComplete ? iconCheckComplete : iconCheck;

    function handleItemClick(item) {
        if (!onTodoItemClicked) return;

        onTodoItemClicked(item);
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
