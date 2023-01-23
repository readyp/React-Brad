import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar bg-slate-900 shadow-lg mb-8">
            <div className="container mx-auto px-8 flex justify-between items-center">
                <div className='flex space-x-4 items-center text-white'>
                    <FaGithub className='text-3xl' />
                    <Link to={'/'} className='uppercase font-bold'>Github Finder</Link>
                </div>
                <div className='space-x-4'>
                    <Link className='btn btn-ghost' to={'/'}>Home</Link>
                    <Link className='btn btn-ghost' to={'/about'}>About</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
