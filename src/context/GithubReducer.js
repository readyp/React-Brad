const githubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ALL_USERS':
            return {
                ...state,
                users: action.payload,
                loading: false,
                error: null,
            };
        case 'GET_ONE_USER':
            return {
                ...state,
                user: action.payload,
            };
        case 'GET_USER_REPOS':
            return {
                ...state,
                repos: action.payload,
                loading: false,
            };
        case 'SET_LOADING':
            return { ...state, loading: true };
        case 'SET_ERROR':
            return { ...state, error: action.payload, users: null };
        case 'CLEAR_RESULT':
            return { ...state, users: null };
        default:
            return state;
    }
};

export default githubReducer;
