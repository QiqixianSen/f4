import * as constants from "./constants";
import axios from "axios";

// 获取精品书单页内容
export const getallbookist = list => ({
  type: constants.GET_BOOK_LIST,
  list
});

export const getbookinfo = () => {
  return dispatch => {
    axios
      .get(
        "http://read.xiaoshuo1-sm.com/novel/i.php?do=is_pay_sdlist&page=1&size=10&shuqi_h5=&onlyCpBooks=1&_=1563891278754"
      )
      .then(res => {
        const list = res.data.data;
        dispatch(getallbookist(list));
      });
  };
};

//获取女频内容
export const getswiperdata = (swiperlist, girlList, newList, niceList) => ({
  type: constants.GET_SWIPER_LIST,
  swiperlist,
  girlList,
  newList,
  niceList
});

export const getswiperlist = () => {
  return dispatch => {
    axios
      .get(
        "http://bookstoreapi.shuqireader.com/eva_bookstore/v1/stencil/query?appId=1&pageId=3&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1563940368&type=2&resetcache=&sign=698DAD69A1E47CD41B9FC761F16F8690&key=shuqiapi&_=1563940368022"
      )
      .then(res => {
        //轮播图部分
        // console.log(res)
        const swiperlist = res.data.data.module[6].content.data.map(
          ({ content, m_s_name }) => ({
            content,
            m_s_name
          })
        );
        // 主编力荐
        const girlList = res.data.data.module[1].content;
        // 女频新书
        const newList = res.data.data.module[1].content;
        // 女生美文榜
        const niceList = res.data.data.module[16].content;

        dispatch(getswiperdata(swiperlist, girlList, newList, niceList));
      });
  };
};

//获取男频内容
export const getboydata = hotlist => ({
  type: constants.GET_boy_LIST,
  hotlist
});

export const getboylist = () => {
  return dispatch => {
    axios
      .get(
        "http://bookstoreapi.shuqireader.com/eva_bookstore/v1/stencil/query?appId=1&pageId=2&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1563988545&type=2&resetcache=&sign=92A0F43C78F112E5A2A3374FD0171B59&key=shuqiapi&_=1563988545512"
      )
      .then(res => {
        const hotlist = res.data.data.module[6].content.data.map(
          ({ content, m_s_name }) => ({
            content,
            m_s_name
          })
        );
        // console.log(hotlist)
        dispatch(getboydata(hotlist));
      });
  };
};
