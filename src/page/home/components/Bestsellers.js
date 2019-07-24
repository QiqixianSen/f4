import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import * as actionCreators from "../store/actionCreators";
import "../style.scss";
import "../../../statics/font_1307227_9qrecju4ty/iconfont.css";

class Bestsellers extends Component {
  render() {
    return (
      <div>
        <div className="title-header">
          <i className="iconfont icon-EnergyResearch" />
          <h3 className="home-title">{this.props.children}</h3>
        </div>
        {this.props.bestList.map((item, index) => {
          if (index === 0) {
            return (
              <Link key={item.bid} to={`/detail/authorId=${item.author}&bookId=${item.bid}&authorName=${item.author_name}&id=4743151`} >
              <div className="new-one"  key={item.bid} onClick={()=>{this.props.handleDetail(item.bid,item.author_name,item.book_cover,item.book_info,item.bookname,item.size,item.stat_name)}}>
                <div className="new-left">
                  <img src={item.book_cover} alt="" />
                  <span className="new-num">{index + 1}</span>
                </div>

                <div className="new-right">
                  <h4 className="new-title">{item.bookname}</h4>
                  <span className="new-author">{item.author_name}</span>
                  <p className="book-item-desc new-desc">{item.book_info}</p>
                  <div className="book-item-tag new-tags">
                    <span className="tag-spe">{item.stat_name}</span>
                    {item.tag.map((tag,index)=> {
                      return <span key={index}>{tag}</span>;
                    })}
                  </div>
                </div>
              </div>
              </Link>
            );
          } else {
            return (
              <Link key={item.bid} to={`/detail/authorId=${item.author}&bookId=${item.bid}&authorName=${item.author_name}&id=6688238`} >
              <li className="new-li" key={item.bid} onClick={()=>{this.props.handleDetail(item.bid,item.author_name,item.book_cover,item.book_info,item.bookname,item.size,item.stat_name)}}>
                <i>{index+1}</i>
                <h3>{item.bookname}</h3>
                <div className="book-item-tag ">
                  <span className="tag-spe">{item.stat_name}</span>
                  {item.tag.slice(0, 1).map((tag,index) => {
                    return <span key={index}>{tag}</span>;
                  })}
                </div>
              </li>
              </Link>
            );
          }
        })}
        <div className="home-change">
          <span>查看更多</span>
        </div>
        <div className="white-space" />
      </div>
    );
  }
}

const mapState = state => ({
  bestList: state.home.bestList
});
const mapDispatch = dispatch =>({
  handleDetail(bid,author_name,book_cover,book_info,bookname,size,stat_name){
    dispatch(actionCreators.getInfo(bid,author_name,book_cover,book_info,bookname,size,stat_name))
  },
})

export default connect(
  mapState,
  mapDispatch
)(Bestsellers);
