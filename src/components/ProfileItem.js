import { Link } from "react-router-dom"

function ProfileItem({ profile }) {
    return (
        <div className="bg-gray-900 rounded p-4 flex space-x-8">
            {/* img */}
            <img src={`${profile.avatar_url}`} alt='profile-img' className="w-12 h-12 rounded-full" />
            {/* content */}
            <div>
                <p className="text-white">{profile.login}</p>
                <Link className="text-sm text-slate-300 text-opacity-40 hover:text-opacity-100 duration-150">Link to profile</Link>
            </div>

        </div>
    )
}

export default ProfileItem
