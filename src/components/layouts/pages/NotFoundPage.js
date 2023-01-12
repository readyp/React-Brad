import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"

function NotFoundPage() {
    return (
        <div className="flex flex-col space-y-8 justify-center items-center">
            <h1 className="text-5xl text-center text-primary-content">404 - Page not found</h1>
            <Link to={'/'} className="btn btn-primary space-x-4">
                <FaHome className="text-xl"/>
                <span >Back to home</span>
            </Link>
        </div>
    )
}

export default NotFoundPage
