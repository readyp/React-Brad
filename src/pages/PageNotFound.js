import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

function PageNotFound() {
    return (
        <div className='text-center'>
            <h2 className='text-3xl my-4 font-bold'>404 - Page Not Found</h2>
            <Link to={'/'} className='btn bg-green-500 text-white hover:bg-green-700 space-x-4'>
                <FaHome className='text-xl' />
                <span>Go back to home</span></Link>
        </div>
    )
}

export default PageNotFound
