import * as constants from "./constants";

const defaultState = {
  giftList: [], //精品推荐
  remList: [], //为你推荐
  choiceList: [], //精品书单
  newList: [], //新书和畅享
  bestList: [],
  girlList: [],
  name:'',
  boyList: [],
  bid:'',
  author_name:'',
  book_cover:'',
  bookname:''

};

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_GIFT_LIST:
      return Object.assign({}, state, { giftList: action.list });
    case constants.CHANGE_REM_LIST:
      return Object.assign(
        {},
        state,
        { remList: action.remList },
        { choiceList: action.choiceList }
      );
    case constants.CHANGE_BEST_LIST:
      return Object.assign(
        {},
        state,
        { newList: action.newList },
        { bestList: action.bestList }
      );
    case constants.CHANGE_GIRL_LIST:
      return Object.assign(
        {},
        state,
        { girlList: action.girlList },
        { boyList: action.boyList },
        {name:action.name}
      );
    case constants.CHANGE_GIRL:
      return Object.assign({}, state, { girlList: action.girlList });
    case constants.CHANGE_BOY:
      return Object.assign({}, state, { boyList: action.boyList });
    case constants.AA:
      return Object.assign(
        {}, 
        state, 
        { bid: action.bid},
        {author_name:action.author_name},
        { book_cover:action.book_cover},
        { book_info:action. book_info},
        {bookname:action.bookname},
        {size:action.size},
        {stat_name:action.stat_name}

      );
    default:
      return state;
  }
};
