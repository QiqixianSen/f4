import { combineReducers } from "redux";
import homeReducer from "../page/home/store/reducer.js";
import detailReducer from "../page/detail/store/reducer.js";
import serchReducer from "../page/search/store/reducer";

const reducer = combineReducers({
  home: homeReducer,
  detail: detailReducer,
  search: serchReducer
});

export default reducer;
