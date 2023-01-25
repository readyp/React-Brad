import { useReducer } from 'react';
import { createContext } from 'react';

const alertReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ALERT':
            return action.payload;
        case 'REMOVE_ALERT':
            return null;
        default:
            return state;
    }
};

export const AlertContext = createContext();
export const AlertProvider = ({ children }) => {
    const [state, dispatch] = useReducer(alertReducer, null);

    // Set Alert
    const setAlert = (msg, type) => {
        dispatch({
            type: 'SET_ALERT',
            payload: { msg, type },
        });

        setTimeout(() => {
            dispatch({
                type: 'REMOVE_ALERT',
            });
        }, 3 * 1000);
    };
    return <AlertContext.Provider value={{
        alert: state,
        setAlert,
    }}>{children}</AlertContext.Provider>;
};
