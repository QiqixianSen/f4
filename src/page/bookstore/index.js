import React, { Component } from "react";
import NavBar from "../../common/header";
import "./index.scss";
import Footer from "../../common/footer";

export default class index extends Component {
  state = {
    arr: JSON.parse(localStorage.getItem("book"))
  };
  render() {
    // console.log(this.props);
    // let arr = JSON.parse(localStorage.getItem("book"));
    // console.log(arr);
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
            <div className="bookCity" onClick={this.gohome}>
              去书城
            </div>
          </div>
        </div>
        <ul className="bookList">
          {this.state.arr &&
            this.state.arr.map((item, index) => {
              return (
                <li key={index}>
                  <img src={item.img} alt="" />
                  <p>{item.name}</p>
                  <div
                    className="delBook"
                    onClick={() => {
                      this.delBook(index);
                    }}
                  >
                    x
                  </div>
                </li>
              );
            })}
        </ul>
        <Footer />
      </div>
    );
  }
  gohome = () => {
    // console.log(777);
    this.props.history.push("/home");
  };
  delBook = index => {
    let arr = JSON.parse(localStorage.getItem("book"));
    arr.splice(index, 1);
    window.localStorage.setItem("book", JSON.stringify(arr));
    this.setState({
      arr: JSON.parse(localStorage.getItem("book"))
    });
  };
}
