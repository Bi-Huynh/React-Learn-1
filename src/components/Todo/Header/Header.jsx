import { useContext, useEffect, useRef, useState } from 'react';
import { TodoContext } from '../../../stores/Todo.jsx';
import iconCheckAllComplete from '../../../image/icon/check-all-complete-2.svg';
import iconCheckAll from '../../../image/icon/check-all.svg';
import './Header.css';

function TodoHeader() {
    const {
        todo: { todoItems, setTodoItems },
        isCheckAll: { isItemsCheckAll, setIsItemsCheckAll },
    } = useContext(TodoContext);

    const [todoValue, setTodoValue] = useState('');
    const inputEl = useRef(null); // khởi tạo ref
    // sử dụng ref để lấy element mong muốn
    // sử dụng effect để thực hiện 1 cái gì đó sau khi DOM đã được render xong

    function handleCheckAllComplete() {
        setIsItemsCheckAll(!isItemsCheckAll);
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
        // createTodoItem(valueTodo);
        const newTodoItems = JSON.parse(JSON.stringify(todoItems));
        newTodoItems.unshift(valueTodo);
        setTodoItems(newTodoItems);

        setTodoValue('');
    }

    useEffect(() => {
        const newTodoItems = todoItems.map((item) => {
            return {
                ...item,
                isComplete: !isItemsCheckAll,
            };
        });
        setTodoItems(newTodoItems);
    }, [isItemsCheckAll]);

    useEffect(() => inputEl.current.focus(), []);
    // sử dụng effect để cứ mỗi lần render lại view sau khi state todoItems được update
    // và khi DOM được render xong thì nó sẽ cho ô input hiển thị con trỏ nhập liệu bên trong
    // chỉ render lần đầu tiên.

    return (
        <div className="card-header">
            <img
                className="img"
                src={isItemsCheckAll ? iconCheckAll : iconCheckAllComplete}
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
