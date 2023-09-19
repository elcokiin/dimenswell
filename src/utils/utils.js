import { materials } from '../data/materials';

export const obtainChangeLength = (initialLength, expansionCoefficient, temperatureVariation) => {
    return initialLength * expansionCoefficient * temperatureVariation;
}

export const obtainMaterial = (materialName) => {
    return materials.find(material => material.name === materialName)
}

// equations for area
// S, sI: area final and initial respectively
// cD: coefficient of dilation
// cT: change in temperature
// tI: initial temperature
// tF: final temperature

export const S = (sI, cD, cT) => {
    return sI * (1 + cD * cT)
}

export const sI = (S, cD, cT) => {
    return S / (1 + cD * cT)
}

export const cD = (S, sI, cT) => {
    return (S / sI - 1) / cT
}

export const tI = (S, sI, cD, tF) => {
    return (S - sI) / (sI * cD * tF)
}

export const tF = (S, sI, cD, tI) => {
    return (S - sI) / (sI * cD * tI)
}


// export const getExpantionCoefficient = ( f, i, tf, ti ) => {
//     const n = f-i;
//     const d = i*(tf - ti)

//     return (n/d)
// }

// // init value
// export const iFun = ( c, f, tf, ti ) => {
//     return f/(c*(tf-ti) + 1)
// }

// // final value
// export const fFun = ( c, i, tf, ti) => {
//     return c*i*(tf - ti)
// }