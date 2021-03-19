import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import checkAllComplete from '../../../image/icon/check-all-complete-2.svg';
import checkAll from '../../../image/icon/check-all.svg';
import './Header.css';

TodoHeader.propTypes = {
    onAllTodoComplete: PropTypes.func,
    onSubmitted: PropTypes.func,
    isCompleteAllItem: PropTypes.bool,
};

TodoHeader.propTypesDefault = {
    onAllTodoComplete: null,
    onSubmitted: null,
    isCompleteAllItem: false,
};

function TodoHeader(props) {
    const { isCompleteAllItem, onAllTodoComplete, onSubmitted } = props;
    const [todoTitle, setTodoTitle] = useState('');

    const [urlImage, setUrlImage] = useState(checkAll);
    const inputEl = useRef(null); // khởi tạo ref
    // sử dụng ref để lấy element mong muốn
    // sử dụng effect để thực hiện 1 cái gì đó sau khi DOM đã được render xong

    // sử lý nhập giá trị vào thanh input
    function handleChangeTodoInput(event) {
        setTodoTitle(event.target.value);
    }

    function handleFromSubmitted(event) {
        event.preventDefault();
        if (!onSubmitted) return;

        let fromValue = {
            title: todoTitle.trim(),
            isComplete: false,
        };

        onSubmitted(fromValue);

        // sau khi submit thì xóa data trên thanh input
        setTodoTitle('');
    }

    function handleCheckedTodo(event) {
        onAllTodoComplete();
        // setIsCompleteAllItem(!isCompleteAllItem);
        isCompleteAllItem
            ? setUrlImage(checkAll)
            : setUrlImage(checkAllComplete);
    }

    useEffect(() => inputEl.current.focus());
    // sử dụng effect để cứ mỗi lần render lại view sau khi state todoItems được update
    // và khi DOM được render xong thì nó sẽ cho ô input hiển thị con trỏ nhập liệu bên trong
    return (
        <div className="card-header">
            <img
                className="img"
                src={urlImage}
                alt="icon check all"
                onClick={handleCheckedTodo}
            />
            <form onSubmit={handleFromSubmitted}>
                <input
                    className="input"
                    name="contentTodo"
                    type="text"
                    placeholder="What needs to be done ?"
                    value={todoTitle} // set value như này để có thể điều khiển value của nó
                    onChange={handleChangeTodoInput}
                    ref={inputEl}
                />
            </form>
        </div>
    );
}

export default TodoHeader;
