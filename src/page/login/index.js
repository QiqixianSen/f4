import React, { Component } from "react";
import { Tabs, Badge, List, InputItem, Button } from "antd-mobile";
import "./index.scss";
import NavBar from "../../common/header";

const tabs = [
  { title: <Badge>账户密码</Badge> },
  { title: <Badge>手机验证登码</Badge> }
];
const TabExample = () => (
  <div className="login">
    <Tabs
      tabBarUnderlineStyle={{ border: "solid #108ee9 2px" }}
      tabs={tabs}
      initialPage={0}
      onChange={(tab, index) => {
        console.log("onChange", index, tab);
      }}
      onTabClick={(tab, index) => {
        console.log("onTabClick", index, tab);
      }}
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
              <span className="check">1872</span>
              <span className="cut">换一换</span>
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
);
export default class Login extends Component {
  render() {
    return (
      <div>
        <NavBar>登录</NavBar>
        <TabExample />
      </div>
    );
  }
}
