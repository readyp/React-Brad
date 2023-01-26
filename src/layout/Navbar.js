import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar bg-gray-900 shadow text-white mb-4'>
            {/* container */}
            <div className='container mx-auto px-4'>
                <div className='flex flex-1 justify-between'>

                    {/* Navbran */}
                    <Link to={'/'} className='flex space-x-4 items-center'>
                        <FaGithub className='text-2xl' />
                        <span className='fond-bold text-2xl'>
                            Github finder
                        </span>
                    </Link>

                    {/* Button */}
                    <div>
                        <Link to={'/'} className='btn btn-ghost'>Home</Link>
                        <Link to={'/about'} className='btn btn-ghost'>About</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
