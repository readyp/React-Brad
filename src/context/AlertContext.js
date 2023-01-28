import { useReducer } from 'react';
import { createContext } from 'react';
import { alertReducer } from './AlertReducer';

export const AlertContext = createContext();
export const AlertProvider = ({ children }) => {
    const initialState = { alert: {} };
    const [state, dispatch] = useReducer(alertReducer, initialState);

    const setAlert = (message, type) => {
        dispatch({
            type: 'SET_ALERT',
            payload: { message, type },
        });

        setTimeout(() => {
            dispatch({
                type: 'CLEAR_ALERT',
            });
        }, 3 * 1000);
    };

    const clearAlert = () => {
        dispatch({ type: 'CLEAR_ALERT' });
    };
    return (
        <AlertContext.Provider
            value={{
                alert: state.alert,
                setAlert,
                clearAlert,
            }}
        >
            {children}
        </AlertContext.Provider>
    );
};
