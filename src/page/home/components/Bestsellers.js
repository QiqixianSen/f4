import React, { Component } from "react";
import { connect } from "react-redux";
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
              <div className="new-one"  key={item.bid}>
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
            );
          } else {
            return (
              <li className="new-li" key={item.bid}>
                <i>{index+1}</i>
                <h3>{item.bookname}</h3>
                <div className="book-item-tag ">
                  <span className="tag-spe">{item.stat_name}</span>
                  {item.tag.slice(0, 1).map((tag,index) => {
                    return <span key={index}>{tag}</span>;
                  })}
                </div>
              </li>
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

export default connect(
  mapState,
  null
)(Bestsellers);
