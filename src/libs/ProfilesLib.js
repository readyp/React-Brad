const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const getAllProfiles = async (url, token) => {
    const res = await fetch(url, {
        headers: {
            Authorization: `token ${token}`,
        },
    });
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return await res.json();
};

export const getProfilesByUsername = async (username) => {
    const endpoint = `${GITHUB_URL}/search/users?q=${username}`;
    const res = await fetch(endpoint, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
        },
    });
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    const data = await res.json();
    console.log(data.items)
    return data.items;
};
