import React, { useContext, useRef } from 'react';
import { TodoContext } from '../../../stores/Todo.jsx';
import './Footer.css';

function Footer() {
    const {
        todo: { getTodoItems },
        setFilter,
        removeTodoComplete,
    } = useContext(TodoContext);
    const btnClick = useRef();

    let amount = getTodoItems().length;
    let item = amount > 1 ? 'items' : 'item';

    function handleClickFilter(event) {
        let filter = event.target.dataset.filter;
        setFilter(filter);
        btnClick.current.classList.toggle('active');
        // xóa active thằng đầu tiên đi
        btnClick.current = event.target;
        btnClick.current.classList.toggle('active');
        // thêm active vào thằng mới
    }

    function handleClickCleanComplete() {
        removeTodoComplete();
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
                    data-filter="Not"
                    onClick={handleClickFilter}
                >
                    Not Completed
                </div>
                <div
                    className="btn"
                    data-filter="Comp"
                    onClick={handleClickFilter}
                >
                    Completed
                </div>
            </div>
            <div className="btn" onClick={handleClickCleanComplete}>
                Clean completed
            </div>
        </footer>
    );
}

export default Footer;
