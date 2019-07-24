import * as  constants from "./constants"
import axios from "axios";


// 获取精品书单页内容
export const getallbookist = (list)=> ({
 type: constants.GET_BOOK_LIST,
 list
})

//获取男频女频轮播图内容
export const getswiperdata = (swiperlist) => ({
  type: constants.GET_SWIPER_LIST,
  swiperlist
})


export const getbookinfo = () => {
 return (dispatch) => {
  axios.get("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_pay_sdlist&page=1&size=10&shuqi_h5=&onlyCpBooks=1&_=1563891278754").then(res => {
   console.log(res);
    const list = res.data.data;
    // console.log(data); 
    // const list = data.data;
    console.log(list);
   dispatch(getallbookist(list))
 })
 }
}


export const getswiperlist = () => {
  return (dispatch) => {
    axios.get("http://bookstoreapi.shuqireader.com/eva_bookstore/v1/stencil/query?appId=1&pageId=3&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1563940368&type=2&resetcache=&sign=698DAD69A1E47CD41B9FC761F16F8690&key=shuqiapi&_=1563940368022").then(res => {
      console.log(res)
      const swiperlist = res.data.data.module[6].content.data.map(({ content, m_s_name }) => ({
        content,
        m_s_name
      }));
      console.log(swiperlist);
      dispatch(getswiperdata(swiperlist))
    })
  }
}
