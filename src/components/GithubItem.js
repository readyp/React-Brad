import { Link } from "react-router-dom"

function GithubItem({ item }) {
    return (
        <div className="bg-slate-900 rounded flex justify-between items-center py-4 px-4">
            {/* Image Left */}
            <div>
                <img className="w-12 h-12 rounded-full" src={item.avatar_url} alt="" />
            </div>

            {/* users info right */}
            <div className="flex flex-col space-y-2">
                <span>{item.login}</span>
                <Link className="text-sm italic text-right">User Profile</Link>
            </div>
        </div>
    )
}

export default GithubItem
