import * as constants from "./constants";

const initstate = {
  allbooks: [], //精品书单
  swiperlist: [], //女生轮播图
  girlList: [], //主编力荐
  newList: [], //女频新书
  niceList: [], //女生美文榜
  hotlist:[],//男生轮播图
};

export default (state = initstate, action) => {
  switch (action.type) {
    case constants.GET_BOOK_LIST:
      return Object.assign({}, state, { allbooks: action.list });

    case constants.GET_SWIPER_LIST:
      return Object.assign({}, state, {
        swiperlist: action.swiperlist,
        girlList: action.girlList,
        newList: action.newList,
        niceList: action.niceList
      });

    case constants.GET_boy_LIST:
      return Object.assign({}, state, { hotlist:action.hotlist})

    default:
      return state;
  }
};
