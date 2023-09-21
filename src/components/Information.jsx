import { Equation } from "./Equation"

import image from '../assets/et.png'

export const Information = ({ title, info, equations, figures, id }) => {
    return (
        <section className='pt-4 px-12 font-serif' id={id}>
            <h1 className='font-extrabold text-lg font-sans'>{title}</h1>
            <div className='mt-2'>
                <p className='text-normal leading-relaxed'>
                    {info}
                </p>
                <div className="w-full flex items-center justify-center py-4">
                    <div className="flex items-center justify-around flex-wrap">
                        {equations.map((e) => (
                            <div key={e.id} className="w-1/2 flex flex-col flex-wrap items-center justify-center py-4 px-8 rounded-md bg-gray-100 shadow-md">
                                <Equation equationText={e.equationText} />
                                <div className="text-center pt-2">
                                    <span className="text-xs font-bold italic">Ecuación: {e.id}: </span>
                                    <span className="text-xs font-sans italic text-center leading-none">{e.description}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="">
                        {figures.map((e) => (
                            <div key={e.id} className="flex flex-col items-center justify-around flex-wrap">
                                <figures className="rounded-md">
                                    <img src={image} alt={e.description} className="cover" />
                                </figures>
                                <div className="text-center pt-2">
                                    <span className="text-xs font-bold italic">Figura: {e.id}: </span>
                                    <span className="text-xs font-sans italic text-center leading-none">{e.description}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}