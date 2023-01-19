import GithubItem from "../components/GithubItem"
import { useQuery, useQueryClient } from 'react-query'
import { GetUsers } from "../lib/GithubLib"

function GithubItemList() {

    const queryClient = useQueryClient()
    const { data: users, isError, error, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: GetUsers,
        initialData: () => {
            return queryClient.getQueryData(['users'])
        }
    })

    if (isLoading) {
        return <h2 className="loading-msg">Loading...</h2>
    }

    if (isError) {
        return <h2 className="error-msg">{error.toString()}</h2>
    }
    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {users?.map((item) => <GithubItem key={item.id} item={item} />)}
        </div>
    )
}

export default GithubItemList
