const profileReducer = (state, action) => {
    switch(action.type) {
        case 'GET_ALL_PROFILES':
            return {
                ...state,
                profiles: action.payload
            }
        default: return state
    }
}

export default profileReducer