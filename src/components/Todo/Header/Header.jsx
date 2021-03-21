import { useContext, useEffect, useRef, useState } from 'react';
import { TodoContext } from '../../../stores/Todo.jsx';
import iconCheckAllComplete from '../../../image/icon/check-all-complete-2.svg';
import iconCheckAll from '../../../image/icon/check-all.svg';
import './Header.css';

function TodoHeader() {
    const [todoValue, setTodoValue] = useState('');
    const {
        isCompleteAllItem: { isCompleteAllItem },
        checkAllComplete,
        createTodoItem,
    } = useContext(TodoContext);

    const inputEl = useRef(null); // khởi tạo ref
    // sử dụng ref để lấy element mong muốn
    // sử dụng effect để thực hiện 1 cái gì đó sau khi DOM đã được render xong

    function handleCheckAllComplete() {
        checkAllComplete();
    }

    function handleChangeInputTodo(event) {
        setTodoValue(event.target.value);
    }

    function handleSubmitFromTodo(event) {
        event.preventDefault();

        const valueTodo = {
            id: new Date().getTime(),
            title: todoValue.trim(),
            isComplete: false,
        };
        createTodoItem(valueTodo);

        setTodoValue('');
    }

    useEffect(() => inputEl.current.focus());
    // sử dụng effect để cứ mỗi lần render lại view sau khi state todoItems được update
    // và khi DOM được render xong thì nó sẽ cho ô input hiển thị con trỏ nhập liệu bên trong
    return (
        <div className="card-header">
            <img
                className="img"
                src={isCompleteAllItem ? iconCheckAllComplete : iconCheckAll}
                alt="icon check all"
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
