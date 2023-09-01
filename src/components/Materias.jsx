import { materials } from "../data/materials"

import { useContext } from "react"
import { MaterialContext } from "../Contexts"

export const Materias = ({setMaterial}) => {
    const material = useContext(MaterialContext)

    const handleChange = (e) => {
        setMaterial(e.target.value)
    }

    return (
        <div className="border-4 border-red-500">
            <h3 className="text-xl font-extrabold bg-red-500 text-white text-center">Material</h3>
            <div className="grid grid-cols-3 gap-16 gap-x-24 p-8">
                {materials.map((material) => {
                    return (
                        // ratio buttons with the materils
                        <div key={material.id} className="flex flex-row items-center">
                            <input type="radio" id={material.name} name="material" value={material.name} onChange={handleChange}/>
                            <label htmlFor={material.name} className="text-sm font-medium pl-2">{material.name}</label>
                        </div>
                    )
                })
                }
            </div>
        </div>

    )
}