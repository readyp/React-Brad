const url = process.env.REACT_APP_GITHUB_URL

export const GetUsers = async () => {
    const res = await fetch(`${url}/users`)
    if (!res.ok) throw new Error(res.statusText)
    return await res.json()
}