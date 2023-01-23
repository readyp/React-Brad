import { useContext } from "react"
import { GithubContext } from "../contexts/github/GithubContext"
import ProfileItem from "./ProfileItem"

function ProfileItemList() {
    const { users } = useContext(GithubContext)
    return (
        <div className="grid gap-4 container mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4">
            {users?.map((item) => <ProfileItem key={item.id} item={item} />)}
        </div>
    )
}

export default ProfileItemList
