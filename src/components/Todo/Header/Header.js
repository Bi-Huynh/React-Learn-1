import React, { useEffect, useRef } from 'react';
import checkAllComplete from '../../../image/icon/check-all-complete-2.svg';
import checkAll from '../../../image/icon/check-all.svg';
import './Header.css';

function TodoHeader(props) {
    const { isCompleteAllItem, onAllComplete, onKeyEnter } = props;
    const inputEl = useRef(null); // khởi tạo ref
    // sử dụng ref để lấy element mong muốn
    // sử dụng effect để thực hiện 1 cái gì đó sau khi DOM đã được render xong

    useEffect(() => inputEl.current.focus());
    // sử dụng effect để cứ mỗi lần render lại view sau khi state todoItems được update
    // và khi DOM được render xong thì nó sẽ cho ô input hiển thị con trỏ nhập liệu bên trong
    return (
        <div className="card-header">
            <img
                className="img"
                src={isCompleteAllItem ? checkAllComplete : checkAll}
                alt="icon down"
                onClick={onAllComplete}
            />
            <input
                className="input"
                name="contentTodo"
                type="text"
                placeholder="What needs to be done ?"
                onKeyUp={onKeyEnter}
                ref={inputEl}
            />
        </div>
    );
}

export default TodoHeader;
