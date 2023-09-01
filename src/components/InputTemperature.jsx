import { useContext } from "react"
import { WidthContext } from "../Contexts"

export const InputTemperature = ({setWidth}) => {
    const widthCot = useContext(WidthContext)

    const handleChange = (e) => {
        setWidth(widthCot)
    }

    return (
        <div className="flex flex-col w-60">
            <label htmlFor="vol" className="text-sm font-normal">Temperatura (-50, 500):</label>
            <input type="range" id="vol" name="vol" min="-50" max="500" onChange={handleChange}></input>
        </div>
    )
}