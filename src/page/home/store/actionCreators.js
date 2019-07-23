import * as constants from './constants'
import axios from 'axios';

//更改‘精品推荐’数据
export const changeGiftList=(list)=>({
    type:constants.CHANGE_GIFT_LIST,
    list
})
//更改‘为你推荐’和‘精品书单’数据
export const changeRemList=(choiceList,remList)=>({
    type:constants.CHANGE_REM_LIST,
    choiceList,
    remList
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

export const getRemList=()=>{
    return (dispatch)=>{
        axios.get('http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1563845543&type=2&resetcache=&func_id=12%2C33%2C11%2C28%2C33%2C12%2C33%2C11%2C19&orderid=31%2C32%2C33%2C34%2C35%2C36%2C37%2C38%2C39&sign=07109DCFE8ACBCFCDC053B3A69148334&key=shuqiapi&_=1563845543472')
        .then(res=>{
            console.log(res)
            const data = res.data.data.module;
            const choiceList = data[3].content.data;
            const remList = data[8].content;
            dispatch(changeRemList(choiceList,remList))
        })
    }
}