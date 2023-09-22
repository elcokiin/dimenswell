import { useState } from "react"
import { Header } from "../components/Header"
import { inputsR3 } from '../data/inputs'
import { Materias } from "../components/Materias";
import { Form } from "../components/Form";

import { Link } from "react-router-dom"

import { obtainMaterial, V, tFV, tIV, vI } from '../utils/utils'
import '../styles/r3.css'

const R3 = () => {
    const [cal, setCal] = useState("");
    const [material, setMaterial] = useState("Acero")
    const [response, setResponse] = useState("")
    const [cInputs, setcInputs] = useState({
        v1: 1.5,
        v2: 2,
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
        const { v1, v2, t1, t2 } = cInputs
        const cD = obtainMaterial(material).dilatationSuperficialCoefficient

        switch (cal) {
            case "v1":
                setResponse(vI(v2, cD, t2 - t1))
                break;
            case "v2":
                setResponse(V(v1, cD, t2 - t1))
                break;
            case "t1":
                setResponse(tIV(v2, v1, cD, t2))
                break;
            case "t2":
                setResponse(tFV(v2, v1, cD, t1))
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
                                Calculadora térmico de expansión Volumetrica
                            </h6>
                            <Link to="/" className="bg-red-500 text-white active:bg-red-600 font-medium uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                                Información
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className="space3D">
                            <div className="cube3D">
                                <div className="base"></div>
                                <aside className="face face1"></aside>
                                <aside className="face face2"></aside>
                                <aside className="face face3"></aside>
                                <aside className="face face4"></aside>
                                <aside className="face face5"></aside>
                                <aside className="face face6"></aside>
                            </div>
                        </div>
                        <div className="w-full px-16 mt-12 mb-12">
                            <Materias setMaterial={setMaterial} m={material}/>
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
                                        <option value="">¿Que quieres calcular?</option>
                                        {/* <option value="c">Coeficiente de expansión termica lineal</option> */}
                                        <option value="v1">Volumen inicial</option>
                                        <option value="v2">Volumen final</option>
                                        <option value="t1">Temperatura inicial</option>
                                        <option value="t2">Temperatura final</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <Form cal={cal} inputs={inputsR3} handleChange={inputHandleChange} handleClick={handleClick} response={response} />
                    </div>
                </div>
            </div>
        </section>
    </div>
};

export default R3;
