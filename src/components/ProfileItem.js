function ProfileItem({ item }) {
    return (
        <div className='bg-gray-900 text-white rounded p-4'>
            {/* flex */}
            <div className='flex flex-1 items-center space-x-2'>
                <img
                    src={item.avatar_url}
                    alt={`img avatar ${item.login}`}
                    className='h-10 w-10 rounded-full'
                />
                <div space-y-2>
                    <p>{item.login}</p>
                    <p>Profile</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileItem;
