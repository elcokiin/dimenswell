import { materials } from "../data/materials"

export const Materias = ({ m, setMaterial }) => {

    const handleChange = (e) => {
        setMaterial(e.target.value)
    }

    return (
        <div className="border-4 border-red-500 sm:ml-0 w-full md:w-auto">
            <h3 className="text-xl font-extrabold bg-red-500 text-white text-center">Material</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-16 sm:gap-x-24 p-8">
                {materials.map((material) => {
                    return (
                        // ratio buttons with the materils
                        <div key={material.id} className="flex flex-row items-center">
                            <input type="radio" id={material.name} name="material" value={material.name} onChange={handleChange} checked={material.name === m}/>
                            <label htmlFor={material.name} className="text-sm font-medium pl-2">{material.name}</label>
                        </div>
                    )
                })
                }
            </div>
        </div>

    )
}