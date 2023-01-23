import { createContext, useReducer } from "react"
import { githubReducer } from "../reducer/GithubReducer"

export const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {

    const initialValue = {
        users: [],
        loading: true
    }

    const [state, dispatch] = useReducer(githubReducer, initialValue)

    // for purpose only
    const getUsers = async () => {
        const res = await fetch(`${GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        if (!res.ok) throw new Error(res.statusText)
        const data = await res.json()

        dispatch({
            type: 'GET_USERS',
            payload: data
        })
    }

    // Search Result
    const searchResult = async (term) => {
        console.log(term)
        const res = await fetch(`${GITHUB_URL}/search/users?q=${term}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        if (!res.ok) throw new Error(res.statusText)
        const data = await res.json()
        console.log(data)
        dispatch({
            type: 'SEARCH_USERS',
            payload: data.items
        })
    }

    // Clear Users Search
    const clearResult = () => {
        dispatch({
            type: 'CLEAR_USERS'
        })
    }

    // useEffect(() => {
    //     getUsers()
    // }, [])

    return (<GithubContext.Provider value={{
        users: state.users,
        getUsers,
        searchResult,
        clearResult,
    }}>
        {children}
    </GithubContext.Provider>)
}