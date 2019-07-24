import React, { Component } from "react";
import "./index.scss";


export default class Side1 extends Component {
    render() {
   
    return (
      <div>
        <div className="classTypes">
          <p>{this.props.list.m_s_name}</p>
        </div>
        <ul className="page1">
          {this.props.list.content.slice(0,4).map(item => {
            return (
              <li className="pagelist" key={item.bid}>
                <div className="book-img">
                  <img
                    src={item.book_cover}
                    alt="http://c-shuqi.11222.cn/assets/default-book_8d24e62.jpg"
                  />
                </div>
                <div className="book-title">{item.bookname}</div>
                <div className="book-writer">{item.author_name}</div>
              </li>
             );
          })}
            </ul>
      </div>
    );
  }
}

