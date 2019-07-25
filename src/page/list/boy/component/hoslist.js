import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actionCreators";
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import Side1 from "./side1"
import "./index.scss";

class Hotlist extends Component {
  render() {   
  return (
   <div className="hotlist">
    <div className="title-header">
     <i className="iconfont icon-EnergyResearch" />
     <h3 className="home-title">{this.props.children}</h3>
    </div>
    <div className="swiper-main swiper-container">
      <ul className="swiper-wrapper">
          {this.props.hotlist.map((item,index )=> {
              return ( 
               <li className="swiper-slide" key={index}><Side1 list={item} key={item.bid}/></li> 
              )
            })
            }     
      </ul>
      <div className="swiper-pagination"></div>
    </div>
    <div className="delay-more">
     <p>加载更多</p>
    </div>
    <div className="split-line"></div>
   </div>
   );
 }
  
  componentDidMount() {
    
  this.setState(
    () => {
     new Swiper('.swiper-container', {
       observer: true, //修改swiper自己或子元素时，自动初始化swiper
       observeParents: true, //修改swiper的父元素时，自动初始化swiper
       loop: true,
       autoplay: {
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination'
        }
        })
    }
   )
   this.props.todoswiper(); 
 }
}

const mapstate = state => ({
  hotlist: state.list.hotlist
});

const mapdispatch = dispatch => ({
  todoswiper() {
    dispatch(actionCreators.getboylist());
  }
});

export default connect(
  mapstate,
  mapdispatch
)(Hotlist);

