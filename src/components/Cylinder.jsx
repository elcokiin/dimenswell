import { useContext } from 'react'
import { MaterialContext } from '../Contexts'
import { obtainMaterial } from '../utils/utils'

export const Cylinder = ({ width }) => {
    const materials = useContext(MaterialContext)
    const gradient = obtainMaterial(materials).gradient

    return (
        <>
            <div className={`h-16 rounded-md`} style={{ width: `${(width * 5)}px`, background: gradient }}></div>
        </>
    )
}