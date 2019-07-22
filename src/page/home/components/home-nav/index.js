import React, { Component } from "react";
import "./index.scss";
import bg from "../../../../statics/images/nav.png";

class index extends Component {
    render() {
        return (
            <>
                <div className="home-nav">
                    <ul>
                        <li>
                            <a href="">
                                <i />
                                <p>分类</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i />
                                <p>排行</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i />
                                <p>女频</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i />
                                <p>男频</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i />
                                <p>书单</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="home-banner">
                    <a href="">
                        <img
                            src="http://img-tailor.11222.cn/pm/book/operate/2018020715462184.jpg"
                            alt=""
                        />
                    </a>
                </div>
            </>
        );
    }
}

export default index;
