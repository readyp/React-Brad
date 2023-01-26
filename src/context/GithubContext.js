import { useEffect, useReducer } from 'react';
import { createContext } from 'react';
import githubReducer from './GithubReducer';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubContext = createContext();
export const GithubProvider = ({ children }) => {
    const initialValue = { users: null, loading: false, error: null };
    const [state, dispatch] = useReducer(githubReducer, initialValue);

    // set loading
    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING',
        });
    };
    // set error
    const setError = (error) => {
        dispatch({
            type: 'SET_ERROR',
            payload: error,
        });
    };

    // result
    const clearResult = () => {
        dispatch({
            type: 'CLEAR_RESULT',
        });
    };

    // get all users for testing only
    const getAllUsers = async () => {
        // setLoading(true);
        setLoading();
        const res = await fetch(`${GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        });
        if (!res.ok) {
            setError(res.statusText);
            throw new Error(res.statusText);
        }
        const data = await res.json();
        dispatch({
            type: 'GET_ALL_USERS',
            payload: data,
        });
    };

    // get all user hy username
    const getUsersByUsername = async (username) => {
        const res = await fetch(`${GITHUB_URL}/search/users?q=${username}`);
        if (!res.ok) {
            setError(res.statusText);
            throw new Error(res.statusText);
        }
        const data = await res.json();
        dispatch({
            type: 'GET_ALL_USERS',
            payload: data.items,
        });
    };

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                loading: state.loading,
                error: state.error,
                getAllUsers,
                getUsersByUsername,
                clearResult,
            }}
        >
            {children}
        </GithubContext.Provider>
    );
};
