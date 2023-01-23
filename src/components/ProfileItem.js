function ProfileItem({item}) {
    return (
        <div className="bg-slate-900 p-4 rounded flex space-x-4">
            {/* img */}
            <img src={item.avatar_url} alt='profile-pic' className="w-12 h-12 rounded-full" />

            {/* Text content */}
            <div>
                <p>{item.login}</p>
                <p>Profile</p>
            </div>
        </div>
    )
}

export default ProfileItem
