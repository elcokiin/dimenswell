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
    const [material, setMaterial] = useState("Acero")
    const [temperature, setTemperature] = useState(25)

    const handleLarge = (e) => {
        setWidth(e.target.value / 1)
    }
    const handleTemperature = (e) => {
        const temperatureVariation = e.target.value - temperature
        const newWidth = width + obtainChangeLength(width, obtainMaterial(material).expansionCoefficient, temperatureVariation)
        setWidth(newWidth)
        setTemperature(e.target.value / 1)
    }

    return (
        <WidthContext.Provider value={width}>
            <MaterialContext.Provider value={material}>
                <TemperatureContext.Provider value={temperature}>
                    <Header />
                    <main className='pt-8 flex'>
                        <section className='flex flex-col items-start w-3/5 ml-8 h-full overflow-hidden'>
                            <Cylinder />
                            <div className='w-full flex items-start m-8 justify-around'>
                                <InputRange min="0" max="150" value={width} message="Longitud (cm)" handleChange={handleLarge} />
                                <InputRange min="-100" max="1500" value={temperature} message="Temperatua (C°)" handleChange={handleTemperature}/>
                            </div>
                            <div className='w-full flex justify-center'>
                                <Materias setMaterial={setMaterial} setWidth={setWidth} />
                            </div>
                        </section>
                        <section className='flex flex-col items-center w-2/5 h-full bg-slate-500'>
                            <div>hola</div>
                            <ZoomCylinderChange />
                            <TableVariations />
                        </section>
                    </main>
                </TemperatureContext.Provider>
            </MaterialContext.Provider>
        </WidthContext.Provider>
    )
}

export default R1