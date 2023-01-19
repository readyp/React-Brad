const url = process.env.REACT_APP_GITHUB_URL
const token = process.env.REACT_APP_GITHUB_TOKEN

export const GetUsers = async () => {
    const res = await fetch(`${url}/users`, {
        headers: {
            Authorization: `token ${token}`
        }
    })
    if (!res.ok) throw new Error(res.statusText)
    return await res.json()
}