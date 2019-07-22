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
            <Icon
              key="0"
              type="cross-circle"
              style={{ marginRight: "16px" }}
              onClick={() => {
                this.props.history.push("/home");
              }}
            />
          ]}
        >
          {this.props.children}
        </NavBar>
      </div>
    );
  }
}
