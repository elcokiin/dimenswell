import { useState } from "react"
import { Header } from "../components/Header"
import { inputs } from '../data/inputs'
import { Materias } from "../components/Materias";
import { Form } from "../components/Form";

import { S, sI, tI, tF, obtainMaterial } from '../utils/utils'
import { Link } from "react-router-dom";

const R2 = () => {
    const [cal, setCal] = useState("");
    const [material, setMaterial] = useState("Acero")
    const [response, setResponse] = useState("");
    const [cInputs, setcInputs] = useState({
        a1: 1.5,
        a2: 2,
        t1: 25,
        t2: 100
    })

    const handleChange = (e) => {
        setResponse("")
        setCal(e.target.value);
    }

    const inputHandleChange = (e) => {
        setResponse("")
        setcInputs({
            ...cInputs,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        const { a1, a2, t1, t2 } = cInputs
        const cD = obtainMaterial(material).dilatationSuperficialCoefficient

        switch (cal) {
            case "a1":
                setResponse(sI(a2, cD, t2 - t1))
                break;
            case "a2":
                setResponse(S(a1, cD, t2 - t1))
                break;
            case "t1":
                setResponse(tI(a2, a1, cD, t2))
                break;
            case "t2":
                setResponse(tF(a2, a1, cD, t1))
                break;
            default:
                break;
        }
    }

    return <div>
        <Header />
        <section className=" py-1 bg-blueGray-50">
            <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-blueGray-700 text-xl font-bold">
                                Calculadora térmica de expansión Superficial
                            </h6>
                            <Link to="/#et-superficial" className="bg-red-500 text-white active:bg-red-600 font-medium uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                                Información
                            </Link>
                        </div>
                        <div className="w-full px-16 mt-12 mb-12">
                            <Materias setMaterial={setMaterial} m={material} />
                        </div>

                    </div>
                    <div className="mt-6 border-b-1 border-blueGray-300">
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                        Calcula
                                    </label>
                                    <select name="cal" id="calc" onChange={handleChange} className="border-0 p-4 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                        <option value="">¿Qué quieres calcular?</option>
                                        {/* <option value="c">Coeficiente de expansión termica lineal</option> */}
                                        <option value="a1">Area inicial</option>
                                        <option value="a2">Area final</option>
                                        <option value="t1">Temperatura inicial</option>
                                        <option value="t2">Temperatura final</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <Form cal={cal} inputs={inputs} handleChange={inputHandleChange} handleClick={handleClick} response={response} />
                    </div>
                </div>
            </div>
        </section>
    </div>
};

export default R2
