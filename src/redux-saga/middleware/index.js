import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeProducts from '../constants/productsConstant'
import { handleGetProducts } from "./productsMiddleware";

function* watchAll() {
    yield all([
        takeEvery(ActionTypeProducts.GET_PRODUCTS_REQUEST, handleGetProducts)
    ])
}

export default watchAll;