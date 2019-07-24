import * as  constants from "./constants"
import axios from "axios";



export const getallbookist = (list)=> ({
 type: constants.GET_BOOK_LIST,
 list
})
export const getbookinfo = () => {
 return (dispatch) => {
  axios.get("http://read.xiaoshuo1-sm.com/novel/i.php?do=is_pay_sdlist&page=1&size=10&shuqi_h5=&onlyCpBooks=1&_=1563891278754").then(res => {
  console.log(res);
    const data = res.data;
    const list = data.title
   dispatch(getallbookist(list))
 })
 }
}
