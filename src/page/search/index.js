import React, { Component } from "react";
import NavBar from "../../common/header";
import Footer from "../../common/footer";
import { SearchBar } from "antd-mobile";
import { connect } from "react-redux";
import { getrecomList, getSearchList } from "./store/actionCreators";
import "./index.scss";

class index extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <NavBar {...this.props}>搜索中心</NavBar>
        <div className="serchInp">
          <div>
            <SearchBar
              placeholder="书名/作者/关键词"
              maxLength={20}
              onChange={value => {
                this.getSlist(value);
              }}
            />
          </div>
          <div className="seachList">
            {this.props.reList.map(item => {
              return (
                <div
                  className="list-sea"
                  key={item.title}
                  onClick={this.godeTail}
                >
                  <div className="list">{item.title}</div>
                </div>
              );
            })}
          </div>
          <ul className="searchcont">
            {this.props.searchList &&
              this.props.searchList.map((item, index) => {
                return (
                  <li key={index} onClick={this.godeTail}>
                    {item}
                  </li>
                );
              })}
          </ul>
          <div className="check">
            <span
              className="checkout"
              onClick={() => {
                this.checkList();
              }}
            >
              换一换
            </span>
            <span className="icon iconfont quanquan">&#xe65f;</span>
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  // 跳转到详情页

  godeTail = () => {
    console.log(1);
    this.props.history.push(
      "/detail/authorId=3249274&bookId=7329628&authorName=%E5%AD%90%E8%8E%AB%E8%B0%A6"
    );
  };
  getSlist = q => {
    // console.log(this.props);
    this.props.getSearchlist(q);
  };
  checkList = () => {
    // console.log(this.props);
    console.log(111);
    this.props.getreList();
  };
  componentDidMount() {
    this.props.getreList();
  }
}

// 容器组件
export default connect(
  state => {
    return {
      reList: state.search.recommendList,
      searchList: state.search.searchList
    };
  },
  dispatch => ({
    getreList() {
      dispatch(getrecomList());
    },
    getSearchlist(q) {
      dispatch(getSearchList(q));
    }
  })
)(index);
