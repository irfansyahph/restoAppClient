import * as ActionType from '../constants/productsConstant'

export const GetProductsRequest = () => ({
    type: ActionType.GET_PRODUCTS_REQUEST
})

export const GetProductsSucceed = (payload) => ({
    type: ActionType.GET_PRODUCTS_SUCCEED,
    payload
})

export const GetProductsFailed = () => ({
    type: ActionType.GET_PRODUCTS_FAILED
})