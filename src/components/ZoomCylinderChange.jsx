import { Cylinder } from "./Cylinder";
import { Equation } from "./Equation";
import { scientificNotation } from '../utils/utils'

export const ZoomCylinderChange = ({ width }) => {

    const differenceLengthLatex = (number) => {
        return "\\Delta L = " + scientificNotation((number / 100).toExponential(2), " m")
    }

    return (

        <div className={`w-4/5 h-auto md:w-60 md:h-60 border border-black rounded-full flex flex-col items-center justify-center py-8`}>
            <Cylinder width={(20 + width * 20) < 0 ? 0 : 20 + width * 20} />
            <span className="text-xs font-semibold pt-2">
                <Equation equationText={differenceLengthLatex(width)} />
            </span>
        </div>
    )
}