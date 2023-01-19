import { Link } from "react-router-dom"
import { FaGithub } from 'react-icons/fa'

function Navbar() {
    return (
        <nav className="navbar bg-slate-900 mb-8 shadow-lg">
            <div className="container mx-auto flex justify-between">
                {/* Navbar Brand */}
                <div>
                    <Link
                        className="flex space-x-4 items-center"
                        to={'/'}
                    >
                        <FaGithub className="text-3xl" />
                        <span className="uppercase font-bold">Github Finder</span>
                    </Link>
                </div>
                {/* Home and About Button */}
                <div className="flex space-x-4">
                    <Link to={'/'} className="btn btn-ghost">Home</Link>
                    <Link to={'/about'} className="btn btn-ghost">About</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
