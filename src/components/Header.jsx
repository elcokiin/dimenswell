import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <nav className="flex w-full h-20 bg-red-400 justify-between items-center">
            <div className="ml-8">
                <Link to="/">
                    <span>Fisica</span>
                </Link>
            </div>
            <div className="mr-12">
                <ul className="flex w-44 justify-between">
                    <li>
                        <Link to="/r1">R1</Link>
                    </li>
                    <li>
                        <Link to="/r2">R2</Link>
                    </li>
                    <li>
                        <Link to="/r3">R3</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}