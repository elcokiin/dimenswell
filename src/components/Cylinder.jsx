import { useContext } from 'react'
import '../styles/cylinder.css'

import { WidthContext } from '../Contexts'

export const Cylinder = () => {
    const width = useContext(WidthContext);
    return (
        <>
            <p className="text-lg font-bold">L = {width/100} m</p>
            <div className="cylinder" style={{width: `${width*5}px`}}></div>
        </>
    )
}