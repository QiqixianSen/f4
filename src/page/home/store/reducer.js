import * as constants from './constants'

const defaultState = {
    giftList:[],//精品推荐
    remList:[],//为你推荐
    choiceList:[]//精品书单
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_GIFT_LIST:
            return Object.assign({},state,{giftList:action.list}) 
        case constants.CHANGE_REM_LIST:
            return Object.assign({},state,{remList:action.remList},{choiceList:action.choiceList})

        default:
            return state
    }
    
}