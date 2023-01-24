import { useEffect } from 'react';
import { useState } from 'react';
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
            };
        default:
            return state;
    }
};

export const ProfileContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const ProfileProvider = ({ children }) => {
    const [state, dispatch] = useReducer(profileReducer, {
        users: null,
        isLoading: false,
        isError: false,
        error: null,
    });

    const [term, setTerm] = useState('')

    useEffect(() => {}, [])
    return (
        <ProfileContext.Provider
            value={{
                users: state,
            }}
        >
            {children}
        </ProfileContext.Provider>
    );
};
