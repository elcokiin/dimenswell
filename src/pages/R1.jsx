import { useState } from 'react'
import { Header } from '../components/Header'
import { InputLarge } from '../components/InputLarge'
import { InputTemperature } from '../components/InputTemperature'
import { WidthContext } from '../Contexts'
import { MaterialContext } from '../Contexts'

import { Cylinder } from '../components/Cylinder'
import { Materias } from '../components/Materias'

const R1 = () => {
    const [width, setWidth] = useState(125)
    const [ material, setMaterial ] = useState("acero")

    return (
        <WidthContext.Provider value={width}>
            <MaterialContext.Provider value={material}>
            <Header />
            <main className='pt-8'>
                <section className='flex flex-col items-start w-3/5 ml-8 h-full overflow-hidden'>
                    <Cylinder />
                    <div className='w-full flex flex-col items-center mt-8 -ml-4 mb-8'>
                        <InputLarge setWidth={setWidth} />
                        <InputTemperature setWidth={setWidth}/>
                    </div>
                    <Materias setMaterial={setMaterial}/>
                </section>
                <div></div>
            </main>
            </MaterialContext.Provider>
        </WidthContext.Provider>
    )
}

export default R1