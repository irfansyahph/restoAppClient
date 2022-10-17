import { combineReducers } from 'redux';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
    productsState: productsReducer
})

export default rootReducer;