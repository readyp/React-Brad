import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar bg-slate-900 px-12 mb-8 shadow-lg">
            <Link to='/' className='space-x-4 text-white'>
                <FaGithub className='text-2xl' />
                <span>Github Finder</span>
            </Link>
            <div className='flex-1 justify-end space-x-4'>
                <Link to={'/'} className='btn btn-ghost'>Home</Link>
                <Link to={'/about'} className='btn btn-ghost'>About</Link>
            </div>
        </nav>
    )
}

export default Navbar
