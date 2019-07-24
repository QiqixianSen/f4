import * as constans from "./constants";

const defaultState = {
  recommendList: [], //搜索页面推荐内容数据
  searchList: [] //搜索数据
};

export default (state = defaultState, actions) => {
  // console.log(actions.searchList);
  switch (actions.type) {
    case constans.CHANGE_RECO_LIST:
      return Object.assign({}, state, { recommendList: actions.recommendList });
    case constans.CHANGE_SEARCH_LIST:
      return Object.assign({}, state, { searchList: actions.searchList });
    default:
      return state;
  }
};
