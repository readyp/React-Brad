function ProfileItem({ item }) {
    return (
        <div className="bg-gray-900 text-white p-4 rounded flex items-center space-x-6">
            {/* img */}
            <img className="w-12 h-12 rounded-full" src={item.avatar_url} alt='' />
            {/* text */}
            <div>
                <p>{item.login}</p>
                <p>Avatar Bio</p>
            </div>
        </div>
    )
}

export default ProfileItem
