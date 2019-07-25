import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actionCreators";
import { Link } from "react-router-dom";
import "../style.scss";
import "../../../statics/font_1307227_9qrecju4ty/iconfont.css";
let obj = {};
class Giftware extends Component {
  render() {
    const { giftList, handleChange } = this.props;
    return (
      <div className="home-gift-ware">
        <div>
          <div className="title-header">
            <i className="iconfont icon-AffordableCredit gift" />
            <h3 className="home-title">精品推荐</h3>
          </div>

          <ul className="title-ul">
            {giftList.map(item => {
              // console.log(item);
              return (
                <Link
                  key={item.bid}
                  to={`/detail/authorId=${item.author}&bookId=${
                    item.bid
                  }&authorName=${item.author_name}`}
                >
                  <li
                    className="title-li"
                    key={item.bid}
                    onClick={() => {
                      {this.props.add(item.book_cover,item.bookname)}
                      obj = {
                        bid: item.bid,
                        author_name: item.author_name,
                        book_cover: item.book_cover,
                        book_info: item.book_info,
                        bookname: item.bookname,
                        size: item.size,
                        stat_name: item.stat_name
                      };
                      window.localStorage.setItem(
                        "detail",
                        JSON.stringify(obj)
                      );
                    }}
                  >
                    <img className="cover-img" src={item.book_cover} alt="" />
                    <p className="book-name">{item.bookname}</p>
                    <span className="book-author">{item.author_name}</span>
                  </li>
                </Link>
              );
            })}
          </ul>
          <div className="home-change" onClick={this.props.getList}>
            <span>换一换</span>
            <i className="iconfont icon-huanyihuan" />
          </div>
          <div className="white-space" />
        </div>
      </div>
    );
  }
  componentDidMount() {
    !this.props.giftList.length&&this.props.getList();
  }
}
const mapState = state => ({
  giftList: state.home.giftList
});
const mapDispatch = dispatch => ({
  getList() {
    dispatch(actionCreators.getListInfo());
  },
  //获取数据
  add(book_cover, bookname) {
    dispatch(actionCreators.getInfo(book_cover, bookname));
  }
});

export default connect(
  mapState,
  mapDispatch
)(Giftware);
