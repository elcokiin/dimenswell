import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <nav className="flex w-full h-20 bg-red-400 justify-between items-center">
            <div className="ml-8">
                <Link to="/" className='block text-center'>
                    <h1 className='text-xl font-extrabold text-white'>DimenSwell</h1>
                    <span className='text-sm font-light text-gray-200'>Explora la expansión térmica de los sólidos.</span>
                </Link>
            </div>
            <div className="mr-12">
                <ul className="flex w-44 justify-between">
                    <li>
                        <Link to="/r1" className='p-2 bg-white rounded-md hover:bg-gray-300 transition-all duration-200'>R1</Link>
                    </li>
                    <li>
                        <Link to="/r2" className='p-2 bg-white rounded-md hover:bg-gray-300 transition-all duration-200'>R2</Link>
                    </li>
                    <li>
                        <Link to="/r3" className='p-2 bg-white rounded-md hover:bg-gray-300 transition-all duration-200'>R3</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}