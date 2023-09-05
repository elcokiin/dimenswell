import { materials } from '../data/materials';

export const obtainChangeLength = (initialLength, expansionCoefficient, temperatureVariation) => {
    return initialLength * expansionCoefficient * temperatureVariation;
}

export const obtainMaterial = (materialName) => {
    return materials.find(material => material.name === materialName)
}