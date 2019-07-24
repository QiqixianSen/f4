import axios from "axios";
import * as constants from "./constants";

//搜索页面推荐内容数据动作
export const changecomList = recommendList => ({
  type: constants.CHANGE_RECO_LIST,
  recommendList
});

// 搜索页面推荐内容数据获取请求
export const getrecomList = () => {
  return dispatch => {
    axios
      .get(
        "http://read.xiaoshuo1-sm.com/novel/i.php?do=is_payreco&id=8000000&qtf=shuqiApp&qtn=cpSearchReplace_sug&nums=8&shuqi_h5=&_=1563886419333"
      )
      .then(res => {
        res = res.data.data;
        dispatch(changecomList(res));
        // console.log(res);
      });
  };
};

// 搜索内容数据
export const getSearch = searchList => ({
  type: constants.CHANGE_SEARCH_LIST,
  searchList
});

export const getSearchList = q => {
  return dispatch => {
    axios
      .get(
        `http://read.xiaoshuo1-sm.com/novel/i.php?do=is_pay_sugs&q=${q}&_=1563930810576`
      )
      .then(response => {
        let res = response.data.data;
        console.log(res);
        dispatch(getSearch(res));
      });
  };
};
