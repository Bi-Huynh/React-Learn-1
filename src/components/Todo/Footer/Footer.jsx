import React, { useContext, useRef } from 'react';
import { useGetTodoItems } from '../../../hooks/TodoItems/useTodoItems';
import { TodoContext } from '../../../stores/Todo.jsx';
import './Footer.css';

function Footer() {
    const {
        filter: { setFiltering },
        todo: { todoItems, setTodoItems },
    } = useContext(TodoContext);
    const btnClick = useRef();

    let amount = useGetTodoItems().length;

    let item = amount > 1 ? 'items' : 'item';

    function handleClickFilter(event) {
        let valueFilter = event.target.dataset.filter;
        setFiltering(valueFilter);
        // set lại filter để cho list nó đổi danh sách
        btnClick.current.classList.toggle('active');
        // xóa active thằng đầu tiên đi
        btnClick.current = event.target;
        btnClick.current.classList.toggle('active');
        // thêm active vào thằng mới
    }

    function HandleClickCleanComplete() {
        // lấy ra danh sách những thằng chưa được complete
        // và gán lại cho danh sách chính thì bỏ được những thằng đã complete
        const todoItemsNotCompleted = todoItems.filter(
            (item) => !item.isComplete
        );
        setTodoItems(todoItemsNotCompleted);
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
                    data-filter="Not Complete"
                    onClick={handleClickFilter}
                >
                    Not Completed
                </div>
                <div
                    className="btn"
                    data-filter="Complete"
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
