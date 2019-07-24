import {combineReducers} from 'redux';
import homeReducer from '../page/home/store/reducer.js';
import detailReducer from '../page/detail/store/reducer.js';
import listReducer from '../page/list/store/reducer.js';

const reducer = combineReducers({
    home:homeReducer,
    detail: detailReducer,
    list:listReducer,
});

export default reducer
