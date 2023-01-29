const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const getUsersByUsername = async (term) => {
    const queries = new URLSearchParams({
        q: term,
    });
    const res = await fetch(`${GITHUB_URL}/search/users?${queries}`, {
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

export const getOneUser = async (username) => {
    const res = await fetch(`${GITHUB_URL}/users/${username}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
        },
    });
    if (!res.ok) {
        if (res.status === 404) {
            window.location = '/pagenotfound';
        }
        throw new Error(res.statusText);
    }
    return await res.json();
};

export const getUserRepos = async (username) => {
    const queries = new URLSearchParams({
        sort: 'created',
        per_page: 10,
    });
    const res = await fetch(
        `${GITHUB_URL}/users/${username}/repos?${queries}`,
        {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        }
    );

    if (!res.ok) {
        throw new Error(res.statusText);
    }

    return await res.json();
};
