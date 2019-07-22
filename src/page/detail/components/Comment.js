import React, { Component } from "react";
import "../style.scss";

class Comment extends Component {
  render() {
    return (
      <div className="commit-detail">
        <div className="title-header">
          <i className="iconfont icon-EnergyResearch" />
          <h3 className="home-title">精华评论</h3>
        </div>
        <ul>
          <li>
            <div className='commit-header'>
              <img src="https://tfs.alipayobjects.com/images/partner/T11EtcXjxAXXXXXXXX" alt=""/>
              <span>陶渊明</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Comment;
