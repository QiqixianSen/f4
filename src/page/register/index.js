import React, { Component } from "react";
import { Tabs, Badge, List, InputItem, Button } from "antd-mobile";
import NavBar from "../../common/header";
import "./index.scss";

const tabs = [
  { title: <Badge>账户密码</Badge> },
  { title: <Badge>手机验证登码</Badge> }
];

function randomColor() {
  var r = parseInt(Math.random() * 256);
  var g = parseInt(Math.random() * 256);
  var b = parseInt(Math.random() * 256);
  var rgb = "rgb(" + r + "," + g + "," + b + ")";
  return rgb;
}
export default class Register extends Component {
  rannum = function(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
      let t = Math.floor(Math.random() * 10);
      arr.push(t);
    }
    return arr;
  };
  setarr = () => {
    this.setState({
      arr: this.rannum(4)
    });
  };
  render() {
    this.state = {
      arr: [],
      bgc: ""
    };
    return (
      <div>
        <NavBar {...this.props}>注册</NavBar>

        <List className="reg-list">
          <InputItem
            type="phone"
            // {...getFieldProps('autofocus')}

            placeholder="请输入手机号"
            // ref={el => (this.autoFocusInst = el)}
          >
            手机号
          </InputItem>
          <InputItem type="phone" clear placeholder="">
            校验码
            <span className="checka">
              {this.rannum(4).map((item, index) => {
                return (
                  <span
                    key={index}
                    style={{
                      color: randomColor(),
                      transform:
                        "rotate(" + Math.round(Math.random() * 360) + "deg)",
                      display: "inlineBlock"
                    }}
                    className="radnum"
                  >
                    {item}
                  </span>
                );
              })}
              <span />
            </span>
            <span
              className="cuta"
              onClick={() => {
                this.setarr();
              }}
            >
              换一换
            </span>
          </InputItem>

          <div className="agess">
            <input type="radio" />
            &emsp;同意<span>《阿里文学用户协议》</span>和
            <span>《隐私服务协议》</span>
          </div>
          <div className="btn">
            <Button type="primary" disabled>
              获取验证码
            </Button>
          </div>
        </List>
      </div>
    );
  }
}
