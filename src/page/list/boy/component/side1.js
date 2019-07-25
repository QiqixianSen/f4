import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux"
import * as actionCreators from "../../../home/store/actionCreators";
import "./index.scss";


class Side1 extends Component {
    render() {
   
    return (
      <div>
        <div className="classTypes">
          <p>{this.props.list.m_s_name}</p>
        </div>
        <ul className="page1">
          {this.props.list.content.slice(0,4).map(item => {
            return (<Link key={item.bid} to={`/detail/authorId=${item.author}&bookId=${item.bid}&authorName=${item.author_name}&id=7520816`} >
            <div key={item.bid} onClick={()=>{this.props.handleDetail(item.bid,item.author_name,item.book_cover,item.book_info,item.bookname,item.size,item.stat_name)}}>
              <li className="pagelist" key={item.bid}>
                <div className="book-img">
                  <img
                    src={item.book_cover}
                    alt="http://c-shuqi.11222.cn/assets/default-book_8d24e62.jpg"
                  />
                </div>
                <div className="book-title">{item.bookname}</div>
                <div className="book-writer">{item.author_name}</div>
              </li>
              </div>
              </Link>);;
          })}
            </ul>
      </div>
    );
  }
}

const mapDispatch = dispatch =>({

  handleDetail(bid,author_name,book_cover,book_info,bookname,size,stat_name){
    dispatch(actionCreators.getInfo(bid,author_name,book_cover,book_info,bookname,size,stat_name))
  },

})

export default connect(
null,
mapDispatch
)(Side1);
