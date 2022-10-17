import * as ActionType from '../constants/productsConstant'

const INIT_STATE = {
    products: []
}

const productsReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_PRODUCTS_REQUEST:
            return { ...state }
        case ActionType.GET_PRODUCTS_SUCCEED:
            return getProductsSucceed(state, action)
        default:
            return state
    }
}

const getProductsSucceed = (state, action) => {
    return {
        ...state,
        products: action.payload
    }
}

export default productsReducer