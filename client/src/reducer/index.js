const initialState = {
    movies: [],
    moviesAll: [],
    detail: undefined,
    activities: []
}
function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_MOVIES":
            return {
                ...state,
                movies: action.payload,
                moviesAll: action.payload
            }
        case "FIND_DETAIL":
            return {
                ...state,
                detail: action.payload,

            }
        case "SET_DETAIL":
            return {
                ...state,
                detail: action.payload,

            }
        default:
            return state;
    }
}

export default rootReducer;