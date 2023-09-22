import Latex from "react-latex";

export const Equation = ({equationText}) => {
    const equation = `$$${equationText}$$`

    return (
        <div className="inline">
            <Latex>
                {equation}
            </Latex>
        </div>
    );
}