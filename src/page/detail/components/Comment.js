import React, { Component } from "react";
import {connect} from 'react-redux';
import "../style.scss";

class Comment extends Component {
  render() {
    return (
      <div className="commit-detail">
        <div className="title-header spe-title">
          <i className="iconfont icon-EnergyResearch" />
          <h3 className="home-title">精华评论</h3>
        </div>
        <ul className='commit-ul'>
        {this.props.list.map((item,index)=>{
          return(
            <li key={index}>
              <div className='commit-header'>
                <img src={item.userPhoto} alt=""/>
                <span>{item.uid}</span>
              </div>
              <div className='commit-p'>
                <p>{item.text}</p>
              </div>
            </li>
          )
        })}
        </ul>
        <div className='white-space'></div>
      </div>
    );
  }
}

const mapState = (state)=>({
  list:state.detail.commentList
})
export default connect(mapState,null)(Comment);
