import React, { Component } from "react";
import NavBar from "../../common/header";
import "./index.scss";
import Footer from "../../common/footer";

export default class index extends Component {
  render() {
    return (
      <div>
        <NavBar {...this.props}>我的书架</NavBar>
        <div className="book">
          <div className="store">
            <img
              src="http://c-shuqi.11222.cn/assets/bookshelf-empty_0f8e62c.png"
              alt=""
            />
            <p>书架都空了</p>
            <div className="bookCity">去书城</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
