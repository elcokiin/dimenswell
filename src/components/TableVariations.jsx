
export const TableVariations = ({ initTemperature, initWidth, finalTemperature, finalWidth }) => {

    const differenceTemperature = finalTemperature - initTemperature
    const differenceWidth = finalWidth - initWidth

    return (
        <div className="flex flex-col items-center mt-12 border-4 border-red-500 w-full mr-8">
            <header className="w-full text-xl font-extrabold bg-red-500 text-white text-center">Tabla de Valores</header>
            <nav>
                <ul className="grid grid-cols-2 gap-16 gap-x-16 p-8 font-semibold text-sm">
                    <li>Temperatura Inicial: {initTemperature} C°</li>
                    <li>Longitud Inicial: {(initWidth/100).toFixed(4)} m</li>
                    <li>Temperatura Final: {finalTemperature} C°</li>
                    <li>Longitud Final: {(finalWidth/100).toFixed(4)} m</li>
                    <li>ΔT: {differenceTemperature ? differenceTemperature : 0}</li>
                    <li>ΔL: {differenceWidth ? (differenceWidth/100).toFixed(8) : 0} m</li>
                </ul>
            </nav>
        </div>
    )
}
