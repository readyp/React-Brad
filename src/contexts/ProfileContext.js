import { useState } from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import { useFetch } from '../hooks/useFetch';
import profileReducer from './ProfileReducer';

export const ProfileContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const ProfileProvider = ({ children }) => {
    const [url, setUrl] = useState(null);
    const [state, dispatch] = useReducer(profileReducer, {
        profiles: null
    })
    
    const { data, isLoading, isError, error } = useFetch(url, GITHUB_TOKEN);
    const profiles = { data, isError, isLoading, error };

    return (
        <ProfileContext.Provider value={{ profiles, setUrl }}>
            {children}
        </ProfileContext.Provider>
    );
};
