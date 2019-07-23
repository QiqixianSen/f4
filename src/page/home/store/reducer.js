import * as constants from './constants'

const defaultState = {
    giftList:[],//精品推荐
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_GIFT_LIST:
            return Object.assign({},state,{giftList:action.list}) 
        default:
            return state
    }
    
}