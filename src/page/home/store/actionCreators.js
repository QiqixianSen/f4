import * as constants from './constants'
import axios from 'axios';

export const changeGiftList=(list)=>({
    type:constants.CHANGE_GIFT_LIST,
    list
})

export const getListInfo=()=>{
    return (dispatch)=>{
        axios.get('http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1563812329&type=2&resetcache=&func_id=24%2C20%2C11%2C19%2C33&orderid=1%2C3%2C4%2C6%2C7&sign=FA4D59207544D551B09CB557FF545B2F&key=shuqiapi&_=1563812329481').then(res=>{
            const data=res.data.data.module;
            const list = data[3].content
            dispatch(changeGiftList(list))
    
        })
    }
}