import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

class index extends Component {
  render() {
    return (
      <>
        <div className="home-nav">
          <ul>
            <li>
              <Link to="/ranking">
                <i />
                <p>分类</p>
              </Link>
            </li>
            <li>
              <Link to="/sorts">
                <i />
                <p>排行</p>
              </Link>
            </li>
            <li>
              <Link to="/girl">
                <i />
                <p>女频</p>
              </Link>
            </li>
            <li>
              <Link to="/boy">
                <i />
                <p>男频</p>
              </Link>
            </li>
            <li>
              <Link to="/booklist">
                <i />
                <p>书单</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="home-banner">
          <a href="">
            <img src="./banner.jpg" alt="" />
          </a>
        </div>
      </>
    );
  }
}

export default index;
