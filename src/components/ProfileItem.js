function ProfileItem({item}) {
    return (
        <div className="bg-slate-900 p-2 rounded flex space-x-4 items-center">
            {/* Img */}
            <img src={item.avatar_url} alt="" className="w-10 h-10 rounded-full" />
            <div>
                <p>{item.login}</p>
                <p>Link Profile</p>
            </div>
        </div>
    )
}

export default ProfileItem
