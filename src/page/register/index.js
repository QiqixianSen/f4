import React, { Component } from "react";
import { Tabs, Badge, List, InputItem, Button, Toast } from "antd-mobile";
import NavBar from "../../common/header";
import "./index.scss";
import axios from "axios";

const tabs = [
  { title: <Badge>账户密码</Badge> },
  { title: <Badge>手机验证登码</Badge> }
];

const randomColor = function() {
  var r = parseInt(Math.random() * 256);
  var g = parseInt(Math.random() * 256);
  var b = parseInt(Math.random() * 256);
  var rgb = "rgb(" + r + "," + g + "," + b + ")";
  return rgb;
};
const rannum = function(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    let t = Math.floor(Math.random() * 10);
    arr.push(t);
  }
  return arr;
};
const getdeg = function() {
  return "rotate(" + Math.round(Math.random() * 360) + "deg)";
};
export default class Register extends Component {
  state = {
    phone: "",
    password: "",
    arr: rannum(4),
    bgc: randomColor(),
    rgb: [randomColor(), randomColor(), randomColor(), randomColor()],
    checked: "",
    reg: [getdeg(), getdeg(), getdeg(), getdeg()]
  };

  setarr = () => {
    // console.log(this.state.arr);
    this.setState({
      arr: rannum(4),
      bgc: randomColor(),
      reg: [getdeg(), getdeg(), getdeg(), getdeg()],
      rgb: [randomColor(), randomColor(), randomColor(), randomColor()]
    });
  };
  signIn = () => {
    let obj = {
      username: this.state.phone,
      password: this.state.password
    };
    // console.log(obj);
    axios.post("http://localhost:9090/sign-up", obj).then(response => {
      let res = response.data;
      // console.log(res);
      if (res.code === 0) {
        Toast.info("注册成功", 1);
        this.props.history.push("/login");
      } else {
        Toast.info("该用户已被注册", 1);
      }
    });
  };
  render() {
    return (
      <div>
        <NavBar {...this.props}>注册</NavBar>

        <List className="reg-list">
          <InputItem
            type="phone"
            value={this.state.phone}
            onChange={value => {
              // console.log(this.state.arr);
              this.setState({
                phone: value
              });
            }}
            placeholder="请输入手机号"
          >
            手机号
          </InputItem>
          <InputItem
            clear
            placeholder=""
            value={this.state.password}
            onChange={value => {
              this.setState({
                password: value
              });
            }}
          >
            校验码
            <span className="checka" style={{ background: this.state.bgc }}>
              {this.state.arr.map((item, index) => {
                return (
                  <span
                    key={index}
                    style={{
                      color: this.state.bgc[index],
                      transform: this.state.reg[index],
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
            <input
              type="radio"
              checked={this.state.checked}
              onClick={() => {
                this.setState({
                  checked: this.state.checked === "" ? "checked" : ""
                });
              }}
              onChange={() => {}}
            />
            &emsp;同意<span>《阿里文学用户协议》</span>和
            <span>《隐私服务协议》</span>
          </div>
          <div className="btn">
            <Button
              type="primary"
              onClick={this.signIn}
              disabled={(() => {
                if (
                  this.state.checked !== "" &&
                  this.state.phone !== "" &&
                  this.state.password !== ""
                ) {
                  return false;
                } else {
                  return true;
                }
              })()}
            >
              获取验证码
            </Button>
          </div>
        </List>
      </div>
    );
  }
}
