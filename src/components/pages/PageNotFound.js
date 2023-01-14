import { Link } from "react-router-dom"
import { FaHome } from 'react-icons/fa'

function PageNotFound() {
    return (
        <div className="flex flex-col space-y-8 justify-center items-center">
            <h2 className="text-4xl text-center font-bold">404 - Page Not Found</h2>
            <Link to={'/'} className="flex justify-center items-center space-x-4 btn btn-primary">
                <FaHome className="text-xl" />
                <span>Back to home</span>
            </Link>
        </div>
    )
}

export default PageNotFound
