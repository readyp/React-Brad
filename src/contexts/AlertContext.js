import { useReducer } from 'react';
import { createContext } from 'react';

const alertReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ALERT':
            return {
                alert: action.payload,
            };
        case 'RESET_ALERT':
            return { alert: null };
        default:
            return state;
    }
};

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const [state, dispatch] = useReducer(alertReducer, {
        alert: null,
    });

    const setAlert = (message, type) => {
        dispatch({
            type: 'SET_ALERT',
            payload: { message, type },
        });

        setTimeout(() => {
            dispatch({
                type: 'RESET_ALERT',
            });
        }, 3 * 1000);
    };
    return (
        <AlertContext.Provider
            value={{
                alert: state.alert,
                setAlert,
            }}
        >
            {children}
        </AlertContext.Provider>
    );
};
