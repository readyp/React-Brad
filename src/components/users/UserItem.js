import { Link } from 'react-router-dom'

function UserItem({ user: { login, avatar_url } }) {
    return (
        <div className="shadow-lg rounded-lg bg-gray-900">
            <div className="flex items-center p-4">
                {/* image */}
                <img className="w-16 h-16 rounded-full" src={avatar_url} alt="profile" />
                <div className="ml-8">
                    <p>{login}</p>
                    <Link className='text-opacity-40 text-slate-300 hover:text-opacity-100'>Profile page</Link>
                </div>
            </div>
        </div>
    )
}

export default UserItem
