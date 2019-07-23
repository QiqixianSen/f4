import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";


export default class index extends Component {
  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={
            <Icon
              type="left"
              size="lg"
              onClick={() => {
                this.props.history.go(-1);
              }}
            />
          }
          onLeftClick={() => console.log("onLeftClick")}
          rightContent={[
            <i className='iconfont icon-home-g' style={{fontSize:'26px'}}
              onClick={() => {
                this.props.history.push("/home");
              }}
            ></i>
          ]}
        >
          {this.props.children}
        </NavBar>
      </div>
    );
  }
}
