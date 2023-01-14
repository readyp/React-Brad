import { useEffect, useState } from "react"
import UserItem from "./UserItem"

function UserResults() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_API}/users`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })

        const data = await response.json()

        setUsers(data)
        setLoading(false)
    }

    return (
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {users.map(user => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    )
}

export default UserResults
