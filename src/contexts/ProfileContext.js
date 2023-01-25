import { useReducer } from 'react';
import { createContext } from 'react';

const profileReducer = (state, action) => {
    switch (action.type) {
        case 'GET_PROFILES':
            return {
                ...state,
                users: action.payload,
                isLoading: false,
                isError: false,
                error: null,
            };
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true,
            };
        case 'SET_ERROR':
            return {
                ...state,
                isError: true,
                error: action.payload,
                isLoading: false,
            };
        case 'SEARCH_PROFILES':
            return {
                ...state,
                users: action.payload,
                isLoading: false,
                isError: false,
                error: null,
            };
        case 'CLEAR_RESULT':
            return {
                ...state,
                users: [],
            };
        default:
            return state;
    }
};

export const ProfileContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const ProfileProvider = ({ children }) => {
    const [state, dispatch] = useReducer(profileReducer, {
        users: null,
        isLoading: false,
        isError: false,
        error: null,
    });

    const getAllProfiles = async () => {
        dispatch({
            type: 'SET_LOADING',
        });
        const res = await fetch(`${GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        });
        if (!res.ok) {
            dispatch({
                type: 'SET_ERROR',
                payload: res.statusText,
            });
            throw new Error(res.statusText);
        }
        const data = await res.json();
        dispatch({
            type: 'GET_PROFILES',
            payload: data,
        });
    };

    const getSearchProfile = async (term) => {
        dispatch({
            type: 'SET_LOADING',
        });
        const res = await fetch(`${GITHUB_URL}/search/users?q=${term}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        });
        if (!res.ok) {
            dispatch({
                type: 'SET_ERROR',
                payload: res.statusText,
            });
            throw new Error(res.statusText);
        }
        const data = await res.json();
        console.log(data);
        dispatch({
            type: 'SEARCH_PROFILES',
            payload: data.items,
        });
    };

    const clearResult = () => {
        dispatch({
            type: 'CLEAR_RESULT',
        });
    };

    return (
        <ProfileContext.Provider
            value={{
                users: state,
                getAllProfiles,
                getSearchProfile,
                clearResult,
            }}
        >
            {children}
        </ProfileContext.Provider>
    );
};
