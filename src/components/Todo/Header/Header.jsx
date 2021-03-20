import React, { useEffect, useRef, useState } from 'react';
import checkAllComplete from '../../../image/icon/check-all-complete-2.svg';
import checkAll from '../../../image/icon/check-all.svg';
import './Header.css';

function TodoHeader(props) {
    const { isCompleteAllItem, onCheckAllComplete, onSubmitFrom } = props;
    const [todoValue, setTodoValue] = useState('');

    const inputEl = useRef(null); // khởi tạo ref
    // sử dụng ref để lấy element mong muốn
    // sử dụng effect để thực hiện 1 cái gì đó sau khi DOM đã được render xong

    function handleCheckAllComplete() {
        onCheckAllComplete();
    }

    function handleChangeInputTodo(event) {
        setTodoValue(event.target.value);
    }

    function handleSubmitFromTodo(event) {
        event.preventDefault();

        const valueTodo = {
            title: todoValue.trim(),
            isComplete: false,
        };
        onSubmitFrom(valueTodo);

        setTodoValue('');
    }

    useEffect(() => inputEl.current.focus());
    // sử dụng effect để cứ mỗi lần render lại view sau khi state todoItems được update
    // và khi DOM được render xong thì nó sẽ cho ô input hiển thị con trỏ nhập liệu bên trong
    return (
        <div className="card-header">
            <img
                className="img"
                src={isCompleteAllItem ? checkAllComplete : checkAll}
                alt="icon down"
                onClick={handleCheckAllComplete}
            />
            <form onSubmit={handleSubmitFromTodo}>
                <input
                    className="input"
                    name="contentTodo"
                    type="text"
                    value={todoValue}
                    placeholder="What needs to be done ?"
                    onChange={handleChangeInputTodo}
                    ref={inputEl}
                />
            </form>
        </div>
    );
}

export default TodoHeader;
