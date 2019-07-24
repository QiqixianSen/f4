import React, { Component } from "react";
import NavBar from "../../common/header";
import Footer from "../../common/footer";
import { SearchBar } from "antd-mobile";
import "./index.scss";

export default class index extends Component {
  render() {
    return (
      <div>
        <NavBar {...this.props}>搜索中心</NavBar>
        <div className="serchInp">
          <div>
            <SearchBar placeholder="书名/作者/关键词" maxLength={20} />
          </div>
          <div className="seachList">
            <div className="list-sea">
              <div className="list">百济按不</div>
            </div>
            <div className="list-sea">
              <div className="list">百济按不</div>
            </div>
            <div className="list-sea">
              <div className="list">百济按不</div>
            </div>
          </div>
          <div className="check">
            <span className="checkout">换一换</span>
            <span className="icon iconfont quanquan">&#xe65f;</span>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
