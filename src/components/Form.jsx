import { Equation } from "./Equation"
import { scientificNotation } from '../utils/utils'

export const Form = ({ inputs, handleChange, handleClick, response, cal }) => {

    response = (response / 1).toExponential(2)

    return (
        <form>
            {inputs.map((input, i) => {
                return <div className="mt-6 border-b-1 border-blueGray-300" key={i}>
                    <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold">
                        {input.title}
                    </h6>
                    <div className="flex flex-wrap">
                        {input.content.map((content) => {
                            return <div className="w-full lg:w-6/12 px-4" key={content.id}>
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="number">
                                        {content.subTitle}
                                    </label>
                                    {
                                        content.id === cal ? <span className="px-6 py-2 rounded-md bg-green-500 font-semibold w-full inline-block">Resultado: <Equation equationText={scientificNotation(response, "")}/></span>
                                        : <input onChange={handleChange} name={content.id} type="number" className={`w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150`} defaultValue={content.defaultValue} />
                                    }
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            })}
            <footer className="relative pt-8 pb-6 mt-2 w-full flex items-center justify-center">
                {/* button for calculate */}
                <button className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-6 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button" onClick={handleClick}>
                    Calcular
                </button>
            </footer>
        </form>
    )
}
