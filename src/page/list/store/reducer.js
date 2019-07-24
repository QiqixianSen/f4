import * as  constants from "./constants"

const initstate = {
 allbooks: [],//精品书单
}

export default (state = initstate, action) => {
 switch (action.type) {
  case constants.GET_BOOK_LIST:
   return Object.assign({}, state, { allbooks: action.list })
 default:
   return state;
 }
} 
