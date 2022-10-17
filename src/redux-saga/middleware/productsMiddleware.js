import { call, put } from "redux-saga/effects";
import apiProducts from "../../api/api-Products";
import { GetProductsSucceed, GetProductsFailed } from "../actions/productsAction";

function* handleGetProducts() {
    try {
        const result = yield call(apiProducts.get)
        yield put(GetProductsSucceed(result))
    } catch (error) {
        yield put(GetProductsFailed(error))
    }
}

export {
    handleGetProducts
}