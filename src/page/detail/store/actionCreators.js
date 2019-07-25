import * as constants from './constants'
import axios from 'axios';
export const changeComment=(datas)=>({
    type:constants.CHANGE_COMMENT,
    datas
})
export const changeOtherList=(otherList)=>({
    type:constants.CHANGE_OTHER,
    otherList
})
export const changeDetail=(datas)=>({
    type:constants.CHANGE_DETAIL,
    detailList:datas
})
export const add=(image,title)=>({
    type:constants.ADD,
    list:{
        image,
        title
    }
    
})
export const getBooks=(id)=>{
    const data=id.split('&')
    const authorId = data[0].split('=')[1]
    const bookId = data[1].split('=')[1]

    return (dispatch)=>{
        axios.get(`http://read.xiaoshuo1-sm.com/novel/i.php?do=sp_get&authorId=${authorId}&bookId=${bookId}&fetch=merge&sqUid=8000000&source=store&size=3&page=1&shuqi_h5=&_=1563894925079`
        ).then(res=>{
            const datas=res.data.data
            dispatch(changeComment(datas))

        })
    }

}


export const getOtherDetail=()=>{
    return (dispatch)=>{
        axios.get('http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1563845543&type=2&resetcache=&func_id=12%2C33%2C11%2C28%2C33%2C12%2C33%2C11%2C19&orderid=31%2C32%2C33%2C34%2C35%2C36%2C37%2C38%2C39&sign=07109DCFE8ACBCFCDC053B3A69148334&key=shuqiapi&_=1563845543472')
        .then(res=>{
            const data = res.data.data.module;
            const otherList = data[8].content;
            dispatch(changeOtherList(otherList))
        })
    }
}

