import {FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar bg-slate-900 shadow text-white">
            {/* container */}
            <div className="container mx-auto px-4 flex justify-between">
                {/* Navbrand */}
                <Link to={'/'} className='flex items-center text-white space-x-4'>
                    <FaGithub className='text-3xl' />
                    <span className='uppercase font-bold'>github finder</span>
                </Link>
                {/* Navbutton */}
                <div className='space-x-4'>
                    <Link to={'/'} className='btn btn-ghost'>Home</Link>
                    <Link className='btn btn-ghost'>About</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
