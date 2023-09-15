import { materials } from '../data/materials';

export const obtainChangeLength = (initialLength, expansionCoefficient, temperatureVariation) => {
    return initialLength * expansionCoefficient * temperatureVariation;
}

export const obtainMaterial = (materialName) => {
    return materials.find(material => material.name === materialName)
}

export const getExpantionCoefficient = ( f, i, tf, ti ) => {
    const n = f-i;
    const d = i*(tf - ti)

    return (n/d)
}

// init value
export const iFun = ( c, f, tf, ti ) => {
    return f/(c*(tf-ti) + 1)
}

// final value
export const fFun = ( c, i, tf, ti) => {
    return c*i*(tf - ti)
}