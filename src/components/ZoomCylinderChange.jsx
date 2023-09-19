import { Cylinder } from "./Cylinder";

export const ZoomCylinderChange = ({width}) => {
    return (

        <div className={`w-full h-1/2 bg-circle bg-no-repeat bg-contain bg-center flex flex-col items-center justify-center`}>
            <Cylinder width={20 + width*20}/>
            <span className="text-lg font-semibold">
                ΔL: {(width/100).toFixed(8)}m
            </span>
        </div>
    )
}