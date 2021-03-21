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

    return (
        <div>
            <ScreensClock timeString={timeString}></ScreensClock>
        </div>
    );
}

export default Clock;
