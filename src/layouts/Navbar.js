import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='bg-slate-900 navbar shadow-lg mb-4'>
            {/* Container */}
            <div className='container mx-auto px-4 flex justify-between'>
                {/* Navbrand */}
                <Link
                    to={'/'}
                    className='flex space-x-4 items-center text-white'
                >
                    <FaGithub className='text-3xl' />
                    <span className='text-lg uppercase font-bold'>
                        Github finder
                    </span>
                </Link>
                {/* Button */}
                <div className='space-x-4 text-white'>
                    <Link to={'/'} className='btn btn-ghost'>
                        Home
                    </Link>
                    <Link to={'/about'} className='btn btn-ghost'>
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
