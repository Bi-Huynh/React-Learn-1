import * as React from 'react';
import ClassNames from 'classnames';

import './Item.css';
import iconCheckComplete from '../../../image/icon/check-complete.svg';
import iconCheck from '../../../image/icon/check.svg';

function TodoItem(props) {
    const { item, onItemClicked } = props;
    let classList = ClassNames({
        'todo-item': true,
        complete: item.isComplete,
    });
    let url = item.isComplete ? iconCheckComplete : iconCheck;

    function handleItemClick(item) {
        onItemClicked(item);
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
