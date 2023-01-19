import { useQuery } from "react-query";

const { createContext } = require("react");

const GithubFinderContext = createContext()

const fetchProfile = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
        headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        }
    })
    if (!response.ok) throw new Error(response.status)
    const data = response.json()
    return data
}

export const GithubFinderProvider = ({ children }) => {

    const {data: profiles} = useQuery('profiles', fetchProfile, {
        placeholderData: []
    })

    return (
        <GithubFinderContext.Provider value={{
            profiles,
        }}>
            {children}
        </GithubFinderContext.Provider>
    )
}

export default GithubFinderContext