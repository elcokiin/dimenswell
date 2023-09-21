let countEquations = 1;
let countFigure = 1;

const addCountEquation = () => {
    const auxEquation = countEquations;
    countEquations++;
    return auxEquation;
}

const addCountFigure = () => {
    const auxFigure = countFigure;
    countFigure++;
    return auxFigure;
}

export const information = [
    {
        id: "et",
        title: "Expansión Termica",
        information: "La expansión térmica se refiere al fenómeno en el que los objetos cambian su tamaño o volumen debido a cambios en la temperatura. Hay tres tipos principales de expansión térmica: la expansión térmica lineal, la expansión térmica superficial y la expansión térmica volumétrica. Cada uno de estos tipos de expansión térmica se relaciona con diferentes dimensiones de un objeto.",
        equations: [],
        figures: [
            {
                id: addCountFigure(),
                source: "../assets/et.png",
                description: "https://bit.ly/3t4OwTj Determinación del coeficiente de expansión térmica | HBM"
            }
        ]
    },
    {
        id: "et-lineal",
        title: "Expansión Termica Lineal.",
        information: "Este tipo de expansión se refiere al cambio en la longitud de un objeto debido a cambios en la temperatura. Cuando un material se calienta, sus partículas individuales ganan energía y se mueven más, lo que hace que el objeto se expanda en la dirección en la que se encuentra más débilmente unido. La fórmula general para calcular la expansión térmica lineal es:",
        equations: [
            {
                // latex format
                id: addCountEquation(),
                // ΔL = α * Lsub(i) * ΔT
                equationText: "\\Delta L = \\alpha * L_{i} * \\Delta T",
                description: "Donde ΔL es el cambio en la longitud, α es el coeficiente de expansión lineal del material, L es la longitud original y ΔT es el cambio en la temperatura.",
            },            
        ],
        figures: []
    },
    {
        id: "et-superficial",
        title: "Expansión Termica Superficial.",
        information: " La expansión térmica superficial se refiere al cambio en el área de la superficie de un objeto debido a cambios en la temperatura. Esto es relevante en objetos bidimensionales, como placas o láminas. La fórmula general para calcular la expansión térmica superficial se basa en el coeficiente de expansión superficial (β):",
        equations: [
            {
                id: addCountEquation(),
                // ΔA = β * Asub(i) * ΔT
                equationText: "\\Delta A = \\beta * A_{i} * \\Delta T",
                description: "Donde ΔA es el cambio en el área, β es el coeficiente de expansión superficial del material, A es el área original y ΔT es el cambio en la temperatura.",
            }
        ],
        figures: []
    },
    {
        id: "et-volumetrica",
        title: "Expansión Termica Volumétrica.",
        information: "La expansión térmica volumétrica se refiere al cambio en el volumen de un objeto debido a cambios en la temperatura. Esto es relevante para objetos tridimensionales, como cubos o esferas. La fórmula general para calcular la expansión térmica volumétrica se basa en el coeficiente de expansión volumétrica (γ):",
        equations: [
            {
                id: addCountEquation(),
                // ΔV = γ * Vsub(i) * ΔT
                equationText: "\\Delta V = \\gamma * V_{i} * \\Delta T",
                description: "Donde ΔV es el cambio en el volumen, γ es el coeficiente de expansión volumétrica del material, V es el volumen original y ΔT es el cambio en la temperatura.",
            }
        ],
        figures: []
    }
]