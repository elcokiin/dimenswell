import { Cylinder } from "./Cylinder";
import { Equation } from "./Equation";
import { scientificNotation } from '../utils/utils'

export const ZoomCylinderChange = ({ width }) => {

    const differenceLengthLatex = (number) => {
        return "\\Delta L = " + scientificNotation((number / 100).toExponential(2), " m")
    }

    return (

        <div className={`w-full h-1/2 bg-circle bg-no-repeat bg-contain bg-center flex flex-col items-center justify-center`}>
            <Cylinder width={(20 + width * 20) < 0 ? 0 : 20 + width * 20} />
            <span className="text-xs font-semibold pt-2">
                <Equation equationText={differenceLengthLatex(width)} />
            </span>
        </div>
    )
}