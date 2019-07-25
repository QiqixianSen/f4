import React, { Component } from "react";
import { connect } from "react-redux";
import {Toast} from 'antd-mobile';
import {Link} from 'react-router-dom'
import * as actionCreators from "../store/actionCreators";
import "../style.scss";
import "../../../statics/font_1307227_9qrecju4ty/iconfont.css";

let obj={}
class Recommend extends Component {
  constructor(){
    super()
    this.state = {
      page: 1
    };
    this.changePage=this.changePage.bind(this)
  }
  getListArea() {
    const { remList } = this.props;
    const list = [];
    if (remList.length) {
      for (let i = 0; i < this.state.page * 5; i++) {
        list.push(
          <Link key={remList[i].bid} to={`/detail/authorId=${remList[i].author}&bookId=${remList[i].bid}&authorName=${remList[i].author_name}`}>
          <div className="new-one" key={remList[i].bid} onClick={()=>{{this.props.add(remList[i].book_cover,remList[i].bookname)}
                      obj = {
                        bid: remList[i].bid,
                        author_name: remList[i].author_name,
                        book_cover: remList[i].book_cover,
                        book_info: remList[i].book_info,
                        bookname: remList[i].bookname,
                        size: remList[i].size,
                        stat_name: remList[i].stat_name
                      };
                      window.localStorage.setItem(
                        "detail",
                        JSON.stringify(obj)
                      );
                    }}>
            <div className="new-left">
              <img src={remList[i].book_cover} alt="" />
            </div>
            <div className="new-right">
              <h4 className="new-title">{remList[i].bookname}</h4>
              <span className="new-author">{remList[i].author_name}</span>
              <p className="book-item-desc new-desc">{remList[i].book_info}</p>
              <div className="book-item-tag new-tags">
                <span className="tag-spe">{remList[i].stat_name}</span>
                <span>
                  {Math.ceil(parseInt(remList[i].recommend_num) / 10000)}万
                </span>
                {remList[i].tag.slice(0, 2).map((tag, index) => {
                  return <span key={index}>{tag}</span>;
                })}
              </div>
            </div>
          </div>
          </Link>
        );
      }
    }
    return <div>{list}</div>;
  }
  render() {
    return (
      <div>
        <div className="title-header">
          <i className="iconfont icon-AirPollution rem" />
          <h3 className="home-title">根据你的爱好推荐</h3>
        </div>
        {this.getListArea()}
        <div className="home-change" onClick={this.changePage}>
          <span>加载更多</span>
        </div>
      </div>
    );
  }
  changePage(){
    //存在bug！！！！！
    if(this.state.page<(this.props.remList.length)/5){
      this.setState({
        page:this.state.page+1
      })
    }else{
        Toast.info('已经全部加载完啦', 1);
      return false
    }
    
   
  }
  componentDidMount(){
    !this.props.remList.length&&this.props.getRem()


}
}
const mapState = state => ({
  remList: state.home.remList
});

const mapDispatch = dispatch =>({

    handleDetail(bid,author_name,book_cover,book_info,bookname,size,stat_name){
      dispatch(actionCreators.getInfo(bid,author_name,book_cover,book_info,bookname,size,stat_name))
  },
getRem(){
    dispatch(actionCreators.getRemList())
  },
  add(book_cover, bookname) {
    dispatch(actionCreators.getInfo(book_cover, bookname));
  }



})



export default connect(
  mapState,
  mapDispatch
)(Recommend);
