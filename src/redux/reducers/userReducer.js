const INITIAL_STATE = {
    id: null,
    table_number: null,
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            console.log("DATA DARI ACTION ==>", action.payload)
            return { ...state, ...action.payload }
        default:
            return state
    }
}