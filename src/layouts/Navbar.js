import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar bg-slate-900 shadow mb-8'>
            {/* container */}
            <div className='container mx-auto px-4 text-white flex justify-between'>
                {/* Navbrand */}
                <Link to={'/'} className='flex space-x-4 items-center'>
                    <FaGithub className='text-4xl' />
                    <span className='uppercase font-bold text-2xl'>Github Finder</span>
                </Link>

                {/* Nav Button */}
                <div className='space-x-4'>
                    <Link className='btn btn-ghost' to={'/'}>
                        Home
                    </Link>
                    <Link className='btn btn-ghost' to={'/about'}>
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
