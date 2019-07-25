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
//更改‘新书专区’和‘畅销’的数据
export const changeBestList=(newList,bestList)=>({
    type:constants.CHANGE_BEST_LIST,
    newList,
    bestList
})
//更改‘男生’和‘女生’的数据
export const changeGirlsList=(girlList,boyList,name)=>({
    type:constants.CHANGE_GIRL_LIST,
    girlList,
    boyList,
    name
})
//换一换更改女生数据
export const changeGirl=(girlList)=>({
    type:constants.CHANGE_GIRL,
    girlList,

})
export const changeBoy=(boyList)=>({
    type:constants.CHANGE_BOY,
    boyList,

})
export const getInfo=(book_cover,bookname)=>({
    type:constants.AA,
    book_cover,
    bookname

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
            const data = res.data.data.module;
            const choiceList = data[3].content.data;
            const remList = data[8].content;
            dispatch(changeRemList(choiceList,remList))
        })
    }
}

export const getBestList = ()=>{
    return (dispatch)=>{
        axios.get('http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1563865362&type=2&resetcache=&func_id=11%2C33%2C11%2C19%2C33%2C12%2C33%2C11%2C19%2C33&orderid=18%2C19%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C30&sign=278C9D7E48D4F9F95DADBAB060389434&key=shuqiapi&_=1563865362543')
        .then(res=>{
            const data = res.data.data.module;
            const newList = data[3].content;
            const bestList = data[8].content;
            dispatch(changeBestList(newList,bestList))
            
        })
    }
}
export const getGirlsList = ()=>{
    return (dispatch)=>{
        axios.get('http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1563871149&type=2&resetcache=&func_id=11%2C33%2C11%2C19%2C33%2C11%2C33%2C11%2C19%2C33&orderid=8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17&sign=4BE7358B96AFDAA64E8EA9D36E81F122&key=shuqiapi&_=1563871149263')
        .then(res=>{
            const data = res.data.data.module;
            const name= data[3].m_s_name;
            const girlList = data[3].content;
            const boyList = data[8].content;
            dispatch(changeGirlsList(girlList,boyList))
            
        })
    }
}
export const changeListInfo = ()=>{
    return (dispatch)=>{
        axios.get('http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1563874536&type=2&resetcache=&func_id=19&orderid=11&mid=12&lmkTxt=index&sign=D0586A67FFA49F5AC723BAD7FF5EF6C4&key=shuqiapi&_=1563874536708')
        .then(res=>{          
            const data = res.data.data.module;
            const girlList = data[0].content;
            dispatch(changeGirl(girlList))
            
        })
    }
}
export const changeBoyListInfo = ()=>{
    return (dispatch)=>{
        axios.get('http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1563876041&type=2&resetcache=&func_id=19&orderid=16&mid=17&lmkTxt=index&sign=64F794B42BD6264F1974959165201675&key=shuqiapi&_=1563876041710')
        .then(res=>{
            const data = res.data.data.module;
            const boyList = data[0].content;
            dispatch(changeBoy(boyList))
            
        })
    }
}
