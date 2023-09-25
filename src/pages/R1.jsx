import { useState } from 'react'
import { Header } from '../components/Header'
import { InputRange } from '../components/InputRange'
import { WidthContext, MaterialContext, TemperatureContext } from '../Contexts'

import { obtainChangeLength, obtainMaterial } from '../utils/utils'

import { Cylinder } from '../components/Cylinder'
import { Materias } from '../components/Materias'
import { TableVariations } from '../components/TableVariations'
import { ZoomCylinderChange } from '../components/ZoomCylinderChange'

import '../styles/r1.css'

const R1 = () => {
    const [width, setWidth] = useState(125)
    const [changeWidth, setChangeWidth] = useState(0);
    const [material, setMaterial] = useState("Acero")
    const [temperature, setTemperature] = useState(25)
    const [initTemperature, setInitTemperature] = useState(0)
    const [initWidth, setInitWidth] = useState(0)

    const handleLarge = (e) => {
        setWidth(e.target.value / 1)
    }

    const onMouseDownLarge = () => {
        setInitWidth(width)
    }

    const onMouseUpLarge = (e) => {
        console.log(e.target.value)
        setWidth(e.target.value / 1)
    }

    const handleTemperature = (e) => {
        setTemperature(e.target.value / 1)
    }

    const onMouseDownTemperature = () => {
        setInitTemperature(temperature)
    }

    const onMouseUpTemperature = () => {
        const temperatureVariation = temperature - initTemperature
        const changeLength = obtainChangeLength(width, obtainMaterial(material).expansionCoefficient, temperatureVariation)
        const newWidth = width + changeLength
        setChangeWidth(changeLength)
        setInitWidth(width)
        setWidth(newWidth)
    }


    return (
        <WidthContext.Provider value={width}>
            <MaterialContext.Provider value={material}>
                <TemperatureContext.Provider value={temperature}>
                    <Header />
                    <main className='pt-8 flex overflow-x-hidden'>
                        <section className='flex flex-col items-start w-full mx-2 sm:ml-8 h-full'>
                            <div>
                                <p className="text-lg font-bold">
                                    L = {(width / 100).toFixed(2)} m
                                </p>
                                <Cylinder width={width} />
                            </div>
                            <div className='w-full flex justify-center my-4 items-center'>
                                <div className='w-full sm:w-4/5 flex flex-wrap sm:py-2 sm:px-4 sm:rounded-md sm:bg-gray-50 sm:shadow-lg'>
                                    <div className='w-full flex m-8 justify-around items-center md:w-1/2 flex-col'>
                                        <InputRange min="0" max="150" value={width} message="Longitud (cm)" handleChange={handleLarge} mouseDown={onMouseDownLarge} mouseUp={onMouseUpLarge} />
                                        <InputRange min="-100" max="1500" value={temperature} message="Temperatua (C°)" handleChange={handleTemperature} mouseDown={onMouseDownTemperature} mouseUp={onMouseUpTemperature} />
                                    </div>
                                    <div className='flex justify-center w-full h-auto sm:w-1/2 md:w-80 -mx-2'>
                                        <ZoomCylinderChange width={changeWidth} />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex justify-around flex-wrap items-center'>
                                <Materias setMaterial={setMaterial} m={material} />
                                <TableVariations finalTemperature={temperature} finalWidth={width} initTemperature={initTemperature} initWidth={initWidth} />
                            </div>
                        </section>
                    </main>
                </TemperatureContext.Provider>
            </MaterialContext.Provider>
        </WidthContext.Provider>
    )
}

export default R1