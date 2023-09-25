import { Equation } from "./Equation"
import { scientificNotation } from '../utils/utils'

export const TableVariations = ({ initTemperature, initWidth, finalTemperature, finalWidth }) => {

    // return difference Length
    const differenceLengthLatex = () => {
        return "\\Delta L = " + scientificNotation((differenceWidth/100).toExponential(2), " m")
    }

    const differenceTemperature = finalTemperature - initTemperature
    const differenceWidth = finalWidth - initWidth

    return (
        <div className="flex flex-col items-center border-4 border-red-500 w-auto mt-4 md:mt-0">
            <header className="w-full text-xl font-extrabold bg-red-500 text-white text-center">Tabla de Valores</header>
            <nav>
                <ul className="grid grid-cols-2 gap-8 sm:gap-16 p-8 font-semibold text-sm">
                    <li>Temperatura Inicial: {initTemperature} C°</li>
                    <li>Longitud Inicial: {(initWidth/100).toFixed(4)} m</li>
                    <li>Temperatura Final: {finalTemperature} C°</li>
                    <li>Longitud Final: {(finalWidth/100).toFixed(4)} m</li>
                    <li>ΔT: {differenceTemperature ? differenceTemperature : 0}</li>
                    <li>{differenceWidth ? (<Equation equationText={differenceLengthLatex()}/>) : 0}</li>
                </ul>
            </nav>
        </div>
    )
}
