import React, { Component } from "react";
import { Tabs, Badge, List, InputItem, Button, Toast } from "antd-mobile";
import "./index.scss";
import NavBar from "../../common/header";
import axios from "axios";

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
  state = {
    phonpass: "",
    pwd: "",
    arr: [],
    bgc: "",
    value: "",
    hasError: false,
    usehasError: false,
    usevalue: "",
    checked: "",
    jiaoyan: "",
    phonechecked: ""
  };
  // 登录按钮点击事件
  loginSin = () => {
    let obj = {
      username: this.state.usevalue,
      password: this.state.pwd
    };
    axios.post("http://localhost:9090/sign-in", obj).then(response => {
      let res = response.data;
      if (res.code === 0) {
        Toast.success("登陆成功", 1);
        this.props.history.push("/");
      }
    });
  };

  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info("请输入 11 位的手机号码");
    }
  };

  onChange = value => {
    if (value.replace(/\s/g, "").length < 11) {
      this.setState({
        hasError: true
      });
    } else {
      this.setState({
        hasError: false
      });
    }
    this.setState({
      value
    });
  };

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
      arr: this.rannum(4),
      bgc: randomColor()
    });
  };

  // 跳转到注册
  register = () => {
    this.props.history.push("/register");
    // console.log(this.props);
  };
  render() {
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
                  {/* 账号密码 */}
                  <InputItem
                    onChange={value => {
                      if (value.replace(/\s/g, "").length < 11) {
                        this.setState({
                          usehasError: true
                        });
                      } else {
                        this.setState({
                          usehasError: false
                        });
                      }
                      this.setState({
                        usevalue: value
                      });
                    }}
                    clear
                    type="phone"
                    placeholder="请输入手机号/邮箱"
                    onErrorClick={() => {
                      if (this.state.usehasError) {
                        Toast.info("请输入正确的手机号码");
                      }
                    }}
                    value={this.state.usevalue}
                    error={this.state.usehasError}
                  >
                    账户
                  </InputItem>
                  <InputItem
                    clear
                    placeholder="请输入密码"
                    onChange={value => {
                      this.setState({
                        pwd: value
                      });
                    }}
                  >
                    密码
                  </InputItem>
                  <div className="agess">
                    <input
                      type="radio"
                      checked={this.state.checked}
                      onClick={() => {
                        this.setState({
                          checked: this.state.checked === "" ? "checked" : ""
                        });
                        console.log(this.state.checked);
                      }}
                      onChange={() => {
                        console.log(222);
                      }}
                    />
                    &emsp;同意<span>《阿里文学用户协议》</span>和
                    <span>《隐私服务协议》</span>
                  </div>
                  <div className="btn">
                    <Button
                      onClick={this.loginSin}
                      type="primary"
                      disabled={(() => {
                        console.log(
                          this.state.checked,
                          this.state.usevalue,
                          this.state.pwd
                        );
                        if (
                          this.state.checked !== "" &&
                          this.state.usevalue !== "" &&
                          this.state.pwd !== ""
                        ) {
                          return false;
                        } else {
                          return true;
                        }
                      })()}
                    >
                      登录
                    </Button>
                  </div>
                </List>
                <div className="toreg">
                  <span className="toreg-one">忘记密码</span>
                  <span className="toreg-two" onClick={this.register}>
                    注册
                  </span>
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
                {/* 手机验证登码 */}
                <List>
                  <InputItem
                    clear
                    type="phone"
                    placeholder="请输入手机号"
                    error={this.state.hasError}
                    onErrorClick={this.onErrorClick}
                    onChange={this.onChange}
                    value={this.state.value}
                  >
                    手机号
                  </InputItem>
                  <InputItem
                    placeholder=""
                    value={this.state.jiaoyan}
                    onChange={value => {
                      this.setState({
                        jiaoyan: value
                      });
                    }}
                  >
                    校验码
                    <span
                      className="check"
                      style={{ background: this.state.bgc }}
                    >
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
                  <InputItem
                    value={this.state.phonpass}
                    onChange={value => {
                      this.setState({
                        phonpass: value
                      });
                    }}
                  >
                    验证码<span className="yzm">获取验证码</span>
                  </InputItem>

                  <div className="agess">
                    <input
                      type="radio"
                      checked={this.state.phonechecked}
                      onClick={() => {
                        this.setState({
                          phonechecked:
                            this.state.phonechecked === "" ? "checked" : ""
                        });
                        // console.log(this.state.checked);
                      }}
                      onChange={() => {
                        // console.log(222);
                      }}
                    />
                    &emsp;同意<span>《阿里文学用户协议》</span>和
                    <span>《隐私服务协议》</span>
                  </div>
                  <div className="btn">
                    <Button
                      type="primary"
                      disabled={(() => {
                        if (
                          this.state.phonechecked !== "" &&
                          this.state.value !== "" &&
                          this.state.phonpass !== "" &&
                          this.state.jiaoyan !== ""
                        ) {
                          return false;
                        } else {
                          return true;
                        }
                      })()}
                    >
                      登录
                    </Button>
                  </div>
                </List>
                <div className="toreg">
                  <span className="toreg-one">忘记密码</span>
                  <span className="toreg-two" onClick={this.register}>
                    注册
                  </span>
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
