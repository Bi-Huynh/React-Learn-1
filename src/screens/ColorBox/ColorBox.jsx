import React, { useState } from 'react';
import './ColorBox.scss';

ColorBox.propTypes = {};

const getRandomColor = () => {
    const listColor = ['deeppink', 'green', 'red', 'yellow', 'black'];
    const randomIndex = Math.floor(Math.random() * listColor.length);
    return listColor[randomIndex];
};

function ColorBox(props) {
    const [color, setColor] = useState(() => {
        let initColor = localStorage.getItem('color') || 'deeppink';
        return initColor;
    });

    function handleChangeColorBox(event) {
        let newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('color', newColor);
    }

    return (
        // cách viết inline style trong reactjs
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleChangeColorBox}
        ></div>
    );
}

export default ColorBox;
