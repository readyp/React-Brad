const githubReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                loading: true,
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        case 'GET_ALL_USERS':
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: null,
            };
        case 'CLEAR_RESULT':
            return { ...state, users: null };
        default:
            return state;
    }
};

export default githubReducer;
