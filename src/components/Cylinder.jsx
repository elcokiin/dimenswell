import { useContext, useEffect, useState } from 'react'
import { MaterialContext } from '../Contexts'
import { obtainMaterial } from '../utils/utils'

export const Cylinder = ({ width }) => {
    const materials = useContext(MaterialContext)
    const gradient = obtainMaterial(materials).gradient
    const [screenWidth, setSreenWidthWidth] = useState(window.innerWidth);
    let multiply = 1;

    useEffect(() => {
      const handleResize = () => setSreenWidthWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    if(screenWidth < 450) {
        multiply = 2;
    }
    else if(screenWidth < 640) {
        multiply = 3;
    }
    else if(screenWidth < 840) {
        multiply = 4;
    } 
    else {
        multiply = 5;
    }

    return (
        <>
            <div className={`h-14 sm:h-16 rounded-md`} style={{ width: `${(width * multiply)}px`, background: gradient }}></div>
        </>
    )
}