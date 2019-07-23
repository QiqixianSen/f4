import React, { Component } from "react";
import { Tabs, Badge, List, InputItem, Button } from "antd-mobile";
import "./index.scss";
import NavBar from "../../common/header";

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
export default class Login extends Component {
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
        <NavBar {...this.props}>登录</NavBar>
        <div className="login">
          <Tabs
            tabBarUnderlineStyle={{ border: "solid #108ee9 2px" }}
            tabs={tabs}
            initialPage={0}
            onChange={(tab, index) => {}}
            onTabClick={(tab, index) => {}}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {/* 登录表单 */}
              <div className="min">
                <List>
                  <InputItem
                    // {...getFieldProps('autofocus')}
                    clear
                    placeholder="请输入手机号/邮箱"
                    // ref={el => (this.autoFocusInst = el)}
                  >
                    账户
                  </InputItem>
                  <InputItem
                    // {...getFieldProps('focus')}
                    clear
                    placeholder="请输入密码"
                    // ref={el => (this.inputRef = el)}
                  >
                    密码
                  </InputItem>
                  <div className="agess">
                    <input type="radio" />
                    &emsp;同意<span>《阿里文学用户协议》</span>和
                    <span>《隐私服务协议》</span>
                  </div>
                  <div className="btn">
                    <Button type="primary" disabled>
                      登录
                    </Button>
                  </div>
                </List>
                <div className="toreg">
                  <span className="toreg-one">忘记密码</span>
                  <span className="toreg-two">注册</span>
                </div>
              </div>
              {/* 登录表单结束 */}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {/* 登录表单 */}
              <div className="min">
                <List>
                  <InputItem
                    type="phone"
                    // {...getFieldProps('autofocus')}
                    clear
                    placeholder="请输入手机号"
                    // ref={el => (this.autoFocusInst = el)}
                  >
                    手机号
                  </InputItem>
                  <InputItem type="phone" clear placeholder="">
                    校验码
                    <span className="check">
                      {this.rannum(4).map((item, index) => {
                        return (
                          <span
                            key={index}
                            style={{
                              color: randomColor(),
                              transform:
                                "rotate(" +
                                Math.round(Math.random() * 360) +
                                "deg)",
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
                      className="cut"
                      onClick={() => {
                        this.setarr();
                      }}
                    >
                      换一换
                    </span>
                  </InputItem>
                  <InputItem>
                    验证码<span className="yzm">获取验证码</span>
                  </InputItem>

                  <div className="agess">
                    <input type="radio" />
                    &emsp;同意<span>《阿里文学用户协议》</span>和
                    <span>《隐私服务协议》</span>
                  </div>
                  <div className="btn">
                    <Button type="primary" disabled>
                      登录
                    </Button>
                  </div>
                </List>
                <div className="toreg">
                  <span className="toreg-one">忘记密码</span>
                  <span className="toreg-two">注册</span>
                </div>
              </div>
              {/* 登录表单结束 */}
            </div>
          </Tabs>
        </div>
      </div>
    );
  }
}
