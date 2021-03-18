// @flow
import * as React from 'react';
import ClassNames from 'classnames';

import './Item.css';
import iconCheckComplete from '../../../image/icon/check-complete.svg';
import iconCheck from '../../../image/icon/check.svg';

type Props = {
    item: {
        isComplete: boolean,
        title: string,
    },
    onItemClicked: Function,
};

function TodoItem(props: Props) {
    const { item, onItemClicked } = props;
    let classList = ClassNames({
        'todo-item': true,
        complete: item.isComplete,
    });

    let url = item.isComplete ? iconCheckComplete : iconCheck;

    return (
        <div className={classList}>
            <img
                className="img"
                src={url}
                alt="icon check"
                onClick={onItemClicked}
            />
            <p>{item.title}</p>
        </div>
    );
}

export default TodoItem;
