import React, { Component } from "react";
import { Link } from "react-router-dom";
import login from "../../../../statics/images/login.png";
import bookstore from "../../../../statics/images/bookstore.png";
import search from "../../../../statics/images/search.png";
import "./index.scss";

class HomeHeader extends Component {
    render() {
        return (
            <div className="home-header">
                <div className="header-left">
                    <img
                        className="logo"
                        src="http://c-shuqi.11222.cn/assets/logo_7a44de2.png"
                        alt=""
                    />
                    <span>小奇小说</span>
                </div>
                <div className="header-right">
                    <Link to="/login">
                        <img src={login} alt="" />
                    </Link>
                    <Link to="/bookstore">
                        <img src={bookstore} alt="" />
                    </Link>
                    <Link to="/search">
                        <img src={search} alt="" />
                    </Link>
                </div>
            </div>
        );
    }
}

export default HomeHeader;
