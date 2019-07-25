import * as constants from "./constants";

const defaultState = {
  // detailList:[],//详情
  commentList: [],
  otherList: [],
  cartList: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_COMMENT:
      return Object.assign({}, state, { commentList: action.datas });
    case constants.CHANGE_OTHER:
      return Object.assign({}, state, { otherList: action.otherList });
    case constants.CHANGE_DETAIL:
      return Object.assign({}, state, { detailList: action.detailList });
    case constants.ADD:
      return Object.assign({}, state, {
        cartList: [...state.cartList, action.list]
      });
    default:
      return state;
  }
};
