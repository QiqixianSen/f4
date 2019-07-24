

import { combineReducers } from "redux";
import homeReducer from "../page/home/store/reducer.js";
import detailReducer from "../page/detail/store/reducer.js";
import serchReducer from "../page/search/store/reducer";
import listReducer from '../page/list/store/reducer.js';


const reducer = combineReducers({
  home: homeReducer,
  detail: detailReducer,
  search: serchReducer,
  list: listReducer
});

export default reducer;


