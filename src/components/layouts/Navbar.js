import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar bg-neutral text-primary-content shadow-lg">
            <div className="container mx-auto">
                <div className="px-2 mx-2 space-x-4">
                    <FaGithub className='inline text-3xl' />
                    <Link to={'/'} className='align-middle font-bold'>Github Finder</Link>
                </div>
                <div className="flex-1 px-2 mx-2">
                    <div className="flex justify-end space-x-4">
                        <Link to={'/'} className='btn btn-ghost btn-sm rounded-btn'>
                            Home
                        </Link>
                        <Link to={'/about'} className='btn btn-ghost btn-sm rounded-btn'>
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
