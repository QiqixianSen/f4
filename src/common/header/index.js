import React, { Component } from "react";
import { NavBar, Icon } from "antd-mobile";


export default class index extends Component {
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" size="lg" />}
                    onLeftClick={() => console.log("onLeftClick")}
                    rightContent={[
                        // <Icon
                        //     key="0"
                        //     type="cross-circle"
                        //     style={{ marginRight: "16px" }}
                        // />
                        <i className='iconfont icon-home-g' style={{fontSize:'26px'}}></i>
                    ]}
                >
                    {this.props.children}
                </NavBar>
            </div>
        );
    }
}
