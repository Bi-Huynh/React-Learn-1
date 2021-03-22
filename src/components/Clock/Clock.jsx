import React, { useEffect, useState } from 'react';
import ScreensClock from '../../screens/Clock/Clock.jsx';

Clock.propTypes = {};

const formatDate = (date) => {
    let result = '';

    let hh = `0${date.getHours()}`.slice(-2);
    let mt = `0${date.getMinutes()}`.slice(-2);
    let ss = `0${date.getSeconds()}`.slice(-2);

    result = `${hh} : ${mt} : ${ss}`;

    return result;
};

function Clock() {
    const [timeString, setTimeString] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        const clockInterval = setInterval(() => {
            let now = new Date();
            let newTimeString = formatDate(now);
            setTimeString(newTimeString);
        }, 1000);

        return () => {
            clearInterval(clockInterval);
        };
    }, []);

    const increment = () => {
        setCount((preCount) => preCount + 1);
        // mới :))) có thể nhận vào 1 function, tham số truyền vào là giá trị hiện tại của
        // biến count và ta có thể sử lý biến đó r trả về kết quả mới.
        // và tên tham số thì là gì cũng đc nhưng giá trị thì là giá trị hiện tại của biến count
        // thay vì viết như trên ta có thể viết setCount(count + 1)
    };

    const decrement = () => {
        setCount((preCount) => preCount - 1);
    };

    return (
        <div>
            <ScreensClock timeString={timeString}></ScreensClock>
            <div>
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>
        </div>
    );
}

export default Clock;
