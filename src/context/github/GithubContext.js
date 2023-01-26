import { useReducer } from 'react';
import { createContext } from 'react';
import githubReducer from './GithubReducer';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubContext = createContext();
export const GithubProvider = ({ children }) => {
    const initialState = {
        users: null,
        loading: false,
        error: null,
    };
    const [state, dispatch] = useReducer(githubReducer, initialState);

    // set loading
    const setLoading = () => {
        dispatch({
            type: 'SET_LOADING',
        });
    };

    // set error
    const setError = (err) => {
        dispatch({
            type: 'SET_ERROR',
            payload: err,
        });
    };

    // get all users by username
    const getAllUsersByUsername = async (username) => {
        setLoading();
        const res = await fetch(`${GITHUB_URL}/search/users?q=${username}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        });
        if (!res.ok) {
            setError(res.statusText);
            throw new Error(res.statusText);
        }
        const data = await res.json();
        console.log(data);
        dispatch({
            type: 'GET_ALL_USERS',
            payload: data.items,
        });
    };

    // clear result
    const clearResult = () => {
        dispatch({ type: 'CLEAR_RESULT' });
    };

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                loading: state.loading,
                error: state.error,
                getAllUsersByUsername,
                clearResult,
            }}
        >
            {children}
        </GithubContext.Provider>
    );
};
