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

// equations for volum
// V, vI: area final and initial respectively
// cDV: coefficient of dilation
// cTV: change in temperature
// tIV: initial temperature
// tFV: final temperature

export const V = (vI, cDV, cTV) => {
    return vI * (1 + cDV * cTV)
}

export const vI = (V, cDV, cTV) => {
    return V / (1 + cDV * cTV)
}

export const cDV = (V, vI, cTV) => {
    return (V / vI - 1) / cTV
}

export const tIV = (V, vI, cDV, tFV) => {
    return (V - vI) / (vI * cDV * tFV)
}

export const tFV = (V, vI, cDV, tIV) => {
    return (V - vI) / (vI * cDV * tIV)
}

// method scientific notation for latex format, with units and accept negative numbers
export const scientificNotation = (number, unit) => {
    const numberString = number.toString();
    const numberArray = numberString.split('e');
    const numberScientific = numberArray[0];
    const numberExponent = numberArray[1];
    console.log(numberExponent)
    if (numberExponent && numberExponent !== "+0" && numberExponent !== "-0") {
        return `${numberScientific} \\times 10^{${numberExponent}} ${unit}`;
    } else {
        return `${numberScientific} ${unit}`;
    }
}