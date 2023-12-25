import React, { useState } from 'react';

const Colorform = () => {
    const [color, setColor] = useState('');
    const [boxes, setBoxes] = useState([]);

    const putColorChange = (e) => {
        setColor(e.target.value);
    };

    const putFormSubmit = (e) => {
        e.preventDefault();
        setBoxes([...boxes, color]);
        setColor('');
    };

    return (
        <div>
            <form onSubmit={putFormSubmit}>
                <label>Choose Color: </label>
                <input type="text" value={color} onChange={putColorChange} />
                <button type="submit">Add </button>
            </form>

            <div className="box-container">
                {boxes.map((boxColor, index) => (
                    <div
                        key={index}
                        className="color-box"
                        style={{ backgroundColor: boxColor }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Colorform;