import {combineReducers} from 'redux';
import homeReducer from '../page/home/store/reducer.js';
import detailReducer from '../page/detail/store/reducer.js'

const reducer = combineReducers({
    home:homeReducer,
    detail:detailReducer
});

export default reducer