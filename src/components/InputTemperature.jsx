import { useContext, useEffect, useRef } from "react"
import { WidthContext, TemperatureContext, MaterialContext } from "../Contexts"

import { obtainChangeLength, obtainMaterial } from '../utils/utils'

export const InputTemperature = ({ setWidth, setTemperature }) => {
    const widthCot = useContext(WidthContext)
    const temperatureCot = useContext(TemperatureContext)
    const materialCot = useContext(MaterialContext)

    const handleChange = (e) => {
        const temperatureVariation = e.target.value - temperatureCot
        const newWidth = widthCot + obtainChangeLength(widthCot, obtainMaterial(materialCot).expansionCoefficient, temperatureVariation)
        setWidth(newWidth)
        setTemperature(e.target.value)
    }

    return (
        <div className="flex flex-col w-60">
            <label htmlFor="vol" className="text-sm font-normal">Temperatura (-50, 500):</label>
            <input type="range" id="vol" name="vol" min="-50" max="500" onChange={handleChange}></input>
        </div>
    )
}