import {FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function PageNotFound() {
    return (
        <div className="flex-1 flex justify-center items-center">
            <div className="bg-slate-900 rounded p-8">
                <h1 className="text-4xl capitalize font-bold">404 - Page not found</h1>
                <Link to={'/'} className='flex items-center justify-center space-x-2 mt-8 btn btn-outline w-fit mx-auto btn-info'>
                    <FaHome className='text-4xl' />
                    <span>Back to homepage</span>
                </Link>
            </div>
        </div>
    )
}

export default PageNotFound
