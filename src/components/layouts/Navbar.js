import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="bg-neutral text-white shadow-lg px-4 mb-4">
            <div className='navbar container mx-auto space-x-4 font-bold'>
                <FaGithub className='text-3xl' />
                <Link to={'/'} className='align-middle'>Github Finder</Link>
                <div className='flex-1 justify-end space-x-4'>
                    <Link to={'/'} className='btn btn-ghost'>Home</Link>
                    <Link to={'/about'} className='btn btn-ghost'>About</Link>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
