import { Link } from 'react-router-dom';

function ProfileItem({ item }) {
    return (
        <div className='bg-slate-900 text-white p-4 max-w-lg'>
            <div className='flex space-x-2 items-center'>
                {/* Img */}
                <img
                    src={item.avatar_url}
                    alt={`avatar img ${item.login}`}
                    className='h-10 w-10 rounded-full'
                />
                <div>
                    <p>{item.login}</p>
                    <Link to={`/user/${item.login}`} className='text-sm text-gray-500'>profile</Link>
                </div>
            </div>
        </div>
    );
}

export default ProfileItem;
