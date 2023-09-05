import { useContext } from "react"
import { WidthContext } from "../Contexts"

export const InputLarge = ({setWidth}) => {
    const widthCot = useContext(WidthContext)

    const handleChange = (e) => {
        setWidth(e.target.value / 1)
    }

    return (
        <div className="flex flex-col w-60">
            <label htmlFor="vol" className="text-sm font-normal">Longitud (0.25m, 1.5m):</label>
            <input type="range" value={widthCot} id="vol" name="vol" min="25" max="150" onChange={handleChange}></input>
        </div>
    )
}