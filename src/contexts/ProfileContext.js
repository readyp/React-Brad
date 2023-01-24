import { createContext } from 'react';

const profileReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    return <ProfileContext.Provider>{children}</ProfileContext.Provider>;
};
