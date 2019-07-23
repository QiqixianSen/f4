import React, { Component } from "react";
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import Side1 from "./side1"
import Side2 from "./side2"
import Side3 from "./side3"
import Side4 from "./side4"
import "./index.scss";

class Hotlist extends Component {

 render() {
 
  return (
   <div className="hotlist">
    <div className="title-header">
     <i className="iconfont icon-EnergyResearch" />
     <h3 className="home-title">热门女生分类</h3>
    </div>
    <div className="swiper-main swiper-container">
     <ul className="swiper-wrapper">
      <li className="swiper-slide"><Side1 /></li>
      <li className="swiper-slide"><Side2 /></li>
      <li className="swiper-slide"><Side3 /></li>
      <li className="swiper-slide"><Side4 /></li>
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
 }
}
export default Hotlist;
