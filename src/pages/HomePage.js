import GithubItem from "../components/GithubItem"
import { useQuery } from 'react-query'
import { GetUsers } from "../lib/GithubLib"

function HomePage() {

    const {data: users, isError, error, isLoading} = useQuery({
        queryKey: ['users'],
        queryFn: GetUsers,
    })

    if (isLoading) {
        return <h2 className="loading-msg">Loading...</h2>
    }

    if (isError) {
        return <h2 className="error-msg">{error.toString()}</h2>
    }

    return (
        <div className="container mx-auto">
            <GithubItem />
        </div>
    )
}

export default HomePage
