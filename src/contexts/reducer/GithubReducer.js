export const githubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload
            }
        case 'SEARCH_USERS':
            return {
                ...state,
                users: action.payload
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: []
            }
        default:
            return state
    }
}