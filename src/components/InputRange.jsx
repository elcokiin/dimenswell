import '../styles/inputRange.css'

export const InputRange = ({ value, min, max, message, handleChange, mouseUp, mouseDown }) => {
    return (
        <div className="range">
            <label htmlFor="temperature" className="text-sm font-semibold">{message}</label>
            <div className={`sliderValue`}>
                <span>{value.toFixed(0)}</span>
            </div>
            <div className="field pb-4">
                <div className="value left">
                    {min}</div>
                <input type="range" min={min} max={max} value={value} steps="1" onChange={handleChange} onMouseUp={mouseUp} onMouseDown={mouseDown}/>
                <div className="value right">
                    {max}</div>
            </div>
        </div>
    )
}