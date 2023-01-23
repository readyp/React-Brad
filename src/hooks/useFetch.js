import { useEffect, useReducer } from 'react';

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_ALL_DATA':
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                isError: false,
                error: false,
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
        default:
            return state;
    }
};

export const useFetch = (url = GITHUB_URL, token = GITHUB_TOKEN) => {
    const [state, dispatch] = useReducer(reducer, {
        data: null,
        isLoading: false,
        isError: false,
        error: null,
    });

    useEffect(() => {
        const controller = new AbortController();
        const getAllData = async () => {
            try {
                dispatch({
                    type: 'SET_LOADING',
                });
                const res = await fetch(url, {
                    signal: controller.signal,
                    headers: { Authorization: token },
                });
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                const data = await res.json();
                dispatch({
                    type: 'GET_ALL_DATA',
                    payload: data,
                });
            } catch (err) {
                if (err.name === 'AbortError') {
                    console.log('[useFetch] Abort Error');
                } else {
                    dispatch({
                        type: 'SET_ERROR',
                        payload: err.message,
                    });
                }
            }
        };

        getAllData();
        return () => controller.abort();
    }, [url, token]);

    return {
        data: state.data,
        isLoading: state.isLoading,
        isError: state.isError,
        error: state.error,
    };
};
