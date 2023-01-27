const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const getAllUsersByUsername = async (username) => {
    const res = await fetch(`${GITHUB_URL}/search/users?q=${username}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
        },
    });
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    const data = await res.json();
    return data.items;
};
