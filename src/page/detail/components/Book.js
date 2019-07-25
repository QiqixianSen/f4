import React, { Component } from "react";
import "../style.scss";
import { Button, Icon, List } from "antd-mobile";
import { connect } from "react-redux";
import * as actionCreators from "../store/actionCreators";

var book_arr = [];
let disabled = false;
let index = -1;
class Book extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      data: JSON.parse(localStorage.getItem("detail"))
    };
    this.changeShow = this.changeShow.bind(this);
  }
  getBottonArea() {
    console.log(this.props.cartList);
    index = this.props.cartList.findIndex(
      item => item.title === this.props.bookname
    );
    if (index !== -1) {
      console.log(this.props.bookname);
      disabled = true;
    } else {
      disabled = false;
    }

    console.log(index);
    return (
      <div className="book-choice">
        <Button type="primary" inline style={{ background: "red" }}>
          继续阅读
        </Button>
        <Button
          type="primary"
          inline
          style={{ background: "#fff", color: "#108ee9" }}
        >
          继续下载
        </Button>
        <Button
          disabled={disabled}
          type="primary"
          inline
          style={{ background: "#fff", color: "#108ee9" }}
          onClick={() => {
            {
              this.props.addCart();
            }

            book_arr.push({
              img: this.props.book_cover,
              name: this.props.bookname
            });
            window.localStorage.setItem("book", JSON.stringify(book_arr));
            this.props.addCart(this.props.book_cover, this.props.bookname);
          }}
        >
          加入书架
        </Button>
      </div>
    );
  }

  render() {
    return (
      <div className="book-detail">
        <div>
          <div className="book-info">
            <img src={this.state.data.book_cover} alt="" />
            <div>
              <h4 className="book-title">{this.state.data.bookname}</h4>
              <p className="book-author">{this.state.data.author_name}</p>
              <p className="book-tag">
                <span>青春校园</span>
                <span>{this.state.data.size}字</span>
              </p>
              <p className="book-author">已完结</p>
            </div>
          </div>

          <div className="book-desc">
            {this.getBottonArea()}
            <p className={this.state.show ? "p-spe" : " "}>
              {this.state.data.book_info}
            </p>
            <Icon
              type={this.state.show ? "up" : "down"}
              className="icon"
              onClick={this.changeShow}
            />
          </div>
        </div>
        <List className="my-list" style={{ marginTop: "10px" }}>
          <List.Item arrow="horizontal" multipleLine onClick={() => {}}>
            <i className="iconfont icon-3lishi" />
            <i>最新</i>
            <span>{this.state.data.stat_name}</span>
          </List.Item>
          <List.Item arrow="horizontal" multipleLine onClick={() => {}}>
            <i className="iconfont icon-mulu" />
            <i>目录</i>
            <span>18小时前更新</span>
          </List.Item>
        </List>
        <div className="white-space" />
      </div>
    );
  }
  changeShow() {
    this.setState({
      show: !this.state.show
    });
  }
}
const mapState = state => ({
  list: state.detail.detailList,
  cartList: state.detail.cartList
});

const mapDispatch = dispatch => ({
  addCart(image, title) {
    dispatch(actionCreators.add(image, title));
  }
});
export default connect(
  mapState,
  mapDispatch
)(Book);
