import Latex from "react-latex";

export const Equation = ({equationText}) => {
    const equation = `$$${equationText}$$`

    return (
        <div>
            <Latex>
                {equation}
            </Latex>
        </div>
    );
}