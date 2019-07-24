import React, { Component } from "react";
import { Icon } from "antd-mobile";
import Footer from "../../../common/footer"
import Index from "../../../common/header"
import "./list.scss";
import { connect } from "react-redux";


 export default class Booklist extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      {/* //   <div className="container">
      //     <a href="" className="leftside">
      //       <Icon type="left" />
      //     </a>
      //     <div className="listname">精品书单</div>
      //     <a href="" className="rightside">
      //       <Icon type="right" />
      //     </a>
      //   </div> */}
        <Index/>
        <div className="listmain">
          <ul>
            {this.props.list.map(item => {
              return(
                <li>
                <div className="textside">
                  <div className="textmain">
                    <h3>腐女们看过来【最近的新文】</h3>
                    <p>都是很好看的文！希望大家喜欢都是很好看的文！希望大家喜欢</p>
                    <div>
                      <span>重生</span>
                      <span>重生</span>
                      <span>重生</span>
                      <span>娱乐圈</span>
                    </div>
                  </div>
                  <div className="picside">
                    <div className="pic1">
                      <img src="http://img-tailor.11222.cn/cover/raw/2015071515141777.jpg" />
                    </div>
                    <div className="pic2">
                      <img src="http://img-tailor.11222.cn/cover/raw/2014082218146282.jpg" />
                    </div>
                    <div className="pic3">
                      <img src="http://img-tailor.11222.cn/cover/raw/2014082218140366.jpg" />
                    </div>
                  </div>
                </div>
              </li>      
            )
          })}
                 
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}
// const mapStateToProps = state => ({
//   list: state.list.allbooks
//   })

 
// export default connect(
//   mapStateToProps,
//   null
// )(Booklist)
