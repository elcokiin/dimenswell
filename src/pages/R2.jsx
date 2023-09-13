import { useState } from "react";
import { Header } from "../components/Header";

const R2 = () => {
    const [cal, setCal] = useState("");

    const handleChange = (e) => {
        switch (e.target.value) {
            case "Coeficiente de expansión termica":
                setCal("a")
                break;
            case "Longitud inicial":
                setCal("l1")
                break;
            case "Longitud final":
                setCal("l2")
                break;
            case "Temperatura inicial":
                setCal("t1")
                break;
            case "Temperatura final":
                setCal("t2")
                break;
            default:
                console.log("valor invalido")
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
                                Calculadora térmico de expansión
                            </h6>
                            <button className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                                Información
                            </button>
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
                                        <option defaultValue="coefficient">Coeficiente de expansión termica lineal</option>
                                        <option defaultValue="length1">Longitud inicial</option>
                                        <option defaultValue="lenght2">Longitud final</option>
                                        <option defaultValue="temperature1">Temperatura inicial</option>
                                        <option defaultValue="temperature2">Temperatura final</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form>
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Longitud (m)
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="number">
                                            Longitud Inicial
                                        </label>
                                        <input type="number" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="1.5" />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="number">
                                            Longitud Final
                                        </label>
                                        <input type="number" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="2" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 border-b-1 border-blueGray-300">

                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    Temperatura (C°)
                                </h6>
                                <div className="flex flex-wrap">
                                    <div className="w-full lg:w-12/12 px-4">
                                        <div className="flex flex-wrap">
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="number">
                                                        Temperatura Inicial
                                                    </label>
                                                    <input type="number" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="22" />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="number">
                                                        Temperatura Final
                                                    </label>
                                                    <input type="number" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="500" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative w-full mb-3 mt-6">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Coeficiente de expansión termica
                                            </label>
                                            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="0.343212" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                    <footer className="relative  pt-8 pb-6 mt-2">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap items-center md:justify-between justify-center">
                                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                                    <div className="text-sm text-blueGray-500 font-semibold py-1">
                                        <span className="text-blueGray-500 hover:text-gray-800">Resultado</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </section>
    </div>
};

export default R2;
