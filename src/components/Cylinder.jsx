import { useContext } from 'react'
import '../styles/cylinder.css'
import { WidthContext, MaterialContext } from '../Contexts'
import { obtainMaterial } from '../utils/utils'

export const Cylinder = () => {
    const width = useContext(WidthContext)
    const materials = useContext(MaterialContext)
    const gradient = obtainMaterial(materials).gradient

    return (
        <>
            <p className="text-lg font-bold">
                L = {(width / 100)} m
            </p>
            <div className="cylinder" style={{ width: `${(width * 5)}px`, background: gradient }}></div>
        </>
    )
}