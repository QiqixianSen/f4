import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import "../style.scss";
import "../../../statics/font_1307227_9qrecju4ty/iconfont.css";

class Choiceness extends Component {
  render() {
    return (
      <div>
        <div className="title-header">
          <i className="iconfont icon-AffordableCredit choiceness" />
          <h3 className="home-title">精华之作</h3>
        </div>
        <ul>
          {this.props.list.map(item => {
            return (
              <li className="choice-li" key={item.id}>
                <div className="choice-left">
                  <h4 className="new-title">{item.title}</h4>
                  <p className="book-item-desc new-desc">
                    {item.sdesc}
                  </p>
                  <div className="book-item-tag new-tags">
                  {(item.tags).split(',').slice(0,4).map((item,index)=>{
                    return (
                      <span className="tag-spe" key={index}>{item}</span>
                    ) 
                  })}
                  </div>
                </div>
                <img
                  src={item.items[0].cover}
                  alt=""
                />
              </li>
            );
          })}
        </ul>
        <Link to='/bookList'>
        <div className="home-change">
          <span>查看更多</span>
        </div>
        </Link>
        <div className="white-space" />
      </div>
      
    );
  }
}
const mapState = state => ({
  list: state.home.choiceList
});

export default connect(
  mapState,
  null
)(Choiceness);
