import React, { useContext, useRef } from 'react';
import { ACTION_TODO, TodoContext } from '../../../stores/Todo.jsx';
import './Footer.css';

function Footer() {
    const {
        todos,
        dispatch,
        filter: { setFilter },
    } = useContext(TodoContext);
    const btnClick = useRef();

    let amount = todos.length;

    let item = amount > 1 ? 'items' : 'item';

    function handleClickFilter(event) {
        let valueFilter = event.target.dataset.filter;
        setFilter(valueFilter);

        btnClick.current.classList.toggle('active');
        // xóa active thằng đầu tiên đi
        btnClick.current = event.target;
        btnClick.current.classList.toggle('active');
        // thêm active vào thằng mới
    }

    function HandleClickCleanComplete() {
        dispatch({ type: ACTION_TODO.REMOVE_TODOS });
    }

    return (
        <footer className="footer">
            <p className="footer__counter">
                {amount} {item}
            </p>
            <div className="footer__body">
                <div
                    className="btn active"
                    data-filter="All"
                    ref={btnClick}
                    onClick={handleClickFilter}
                >
                    All
                </div>
                <div
                    className="btn"
                    data-filter="Not Completed"
                    onClick={handleClickFilter}
                >
                    Not Completed
                </div>
                <div
                    className="btn"
                    data-filter="Completed"
                    onClick={handleClickFilter}
                >
                    Completed
                </div>
            </div>
            <div className="btn" onClick={HandleClickCleanComplete}>
                Clean completed
            </div>
        </footer>
    );
}

export default Footer;
