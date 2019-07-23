import React, { Component } from "react";
import { connect } from "react-redux";

import "../style.scss";
import "../../../statics/font_1307227_9qrecju4ty/iconfont.css";

class Recommend extends Component {
  render() {
    return (
      <div>
        <div className="title-header">
          <i className="iconfont icon-AirPollution rem" />
          <h3 className="home-title">根据你的爱好推荐</h3>
        </div>
        {this.props.remList.map(item => {
          return (
            <div className="new-one" key={item.bid}>
              <div className="new-left">
                <img src={item.book_cover} alt="" />
              </div>
              <div className="new-right">
                <h4 className="new-title">{item.bookname}</h4>
                <span className="new-author">{item.author_name}</span>
                <p className="book-item-desc new-desc">{item.book_info}</p>
                <div className="book-item-tag new-tags">
                  <span className="tag-spe">{item.stat_name}</span>
                  <span>
                    {Math.ceil(parseInt(item.recommend_num) / 10000)}万
                  </span>
                  {item.tag.slice(0, 2).map((tag, index) => {
                    return <span key={index}>{tag}</span>;
                  })}
                </div>
              </div>
              
            </div>
          );
        })}
        <div className="home-change">
                <span>加载更多</span>
              </div>
      </div>
    );
  }
}
const mapState = state => ({
  remList: state.home.remList
});

export default connect(
  mapState,
  null
)(Recommend);
