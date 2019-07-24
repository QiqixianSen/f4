import React, { Component } from "react";
import "../style.scss";
import "../../../statics/font_1307227_9qrecju4ty/iconfont.css";
import { connect } from "react-redux";

class Others extends Component {
  render() {
    return (
      <div className="home-gift-ware">
        <div>
          <div className="title-header">
            <i className="iconfont icon-AffordableCredit gift" />
            <h3 className="home-title">看过这本书的人还在看</h3>
          </div>

          <ul className="title-ul spe-ul">
            {this.props.otherList.slice(0,8).map((item, index) => {
              return (
                <li className="title-li" key={index}>
                  <img className="cover-img" src={item.book_cover} alt="" />
                  <p className="book-name">{item.bookname}</p>
                  <span className="book-author">{item.author_name}</span>
                </li>
              );
            })}
          </ul>
          <div className="home-change">
            <span>换一换</span>
            <i className="iconfont icon-huanyihuan" />
          </div>
          <div className="white-space" />
        </div>
      </div>
    );
  }
}
const mapState = (state) => ({
  otherList: state.detail.otherList
});
export default connect(
  mapState,
  null
)(Others);
