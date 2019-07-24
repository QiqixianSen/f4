import * as  constants from "./constants"

const initstate = {
  allbooks: [],//精品书单
  swiperlist: [],//轮播图数据
}

export default (state = initstate, action) => {
 switch (action.type) {
    case constants.GET_BOOK_LIST:
      return Object.assign({}, state, { allbooks: action.list })
   
    case constants.GET_SWIPER_LIST:
     return Object.assign({}, state, { swiperlist: action.swiperlist });
   
    default:
      return state;
 }
} 
