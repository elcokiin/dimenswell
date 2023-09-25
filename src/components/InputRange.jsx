import { useState } from 'react';
import '../styles/inputRange.css'

export const InputRange = ({ value, min, max, message, handleChange, mouseUp, mouseDown }) => {
    const [isTouching, setIsTouching] = useState(false);

    const handleTouchStart = () => {
        setIsTouching(true);
        mouseDown();
    };

    const handleTouchEnd = () => {
        setIsTouching(false);
        mouseUp();
    };


    return (
        <div className="range -ml-5 my-2">
            <label htmlFor="temperature" className="text-sm font-semibold">{message}</label>
            <div className={`sliderValue`}>
                <span>{value.toFixed(0)}</span>
            </div>
            <div className="pb-4 field">
                <div className="value left">
                    {min}</div>
                <input type="range" min={min} max={max} value={value} steps="1" onChange={handleChange} onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onMouseUp={isTouching ? null : mouseUp}
                    onMouseDown={isTouching ? null : mouseDown} />
                <div className="value right">
                    {max}</div>
            </div>
        </div>
    )
}