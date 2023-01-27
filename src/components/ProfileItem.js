function ProfileItem({ item }) {
    return (
        <div className='bg-gray-900 text-white rounded p-4'>
            <div className='flex space-x-4 items-center'>
                {/* img */}
                <img
                    src={item.avatar_url}
                    alt={`avatar img ${item.login}`}
                    className='w-10 h-10 rounded-full'
                />
                <div className='space-y-2'>
                    <p>{item.login}</p>
                    <p>Profile</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileItem;
