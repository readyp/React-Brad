import { Link } from 'react-router-dom';

function ProfileItem({ item }) {
    return (
        <div className='bg-gray-900 rounded p-4 flex items-center space-x-4'>
            {/* Img */}
            <img
                src={item.avatar_url}
                alt={`avatar ${item.login}`}
                className='w-10 h-10 rounded-full'
            />
            {/* content */}
            <div>
                <p>{item.login}</p>
                <Link
                    to={`/user/${item.login}`}
                    className='text-sm italic hover:cursor-pointer'
                >
                    Visit Profile
                </Link>
            </div>
        </div>
    );
}

export default ProfileItem;
