import { useContext } from "react"
import GithubFinderContext from "../context/GithubFinderContext"
import ProfileItem from "./ProfileItem"

function ProfileItemList() {

    const { profiles } = useContext(GithubFinderContext)

    const profileItems = profiles.map(profile => (
        <ProfileItem key={profile.id} profile={profile} />
    ))

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {profileItems}
        </div>
    )
}

export default ProfileItemList
