import { Link } from "react-router-dom";

function ProfileItem({ item }) {
    return (
        <div className='bg-slate-900 text-white rounded space-x-4 p-4 flex items-center'>
            {/* img */}
            <img
                src={item.avatar_url}
                alt={`avatar-profile-${item.login}`}
                className='w-10 h-10 rounded-full'
            />
            <div>
                <p>{item.login}</p>
                <Link className="text-sm italic">link profile</Link>
            </div>
        </div>
    );
}

export default ProfileItem;
