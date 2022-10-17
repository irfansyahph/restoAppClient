const INITIAL_STATE = {
    id: null,
    table_number: ""
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            console.log("DATA DARI ACTION ==>", action.payload)
            delete action.payload.password
            return { ...state, ...action.payload }
        default:
            return state
    }
}