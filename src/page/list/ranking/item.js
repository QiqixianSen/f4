import React, { Component } from "react";
import { Link } from "react-router-dom";
import rankPic from "../../../statics/images/rankpic.png";

import "./index.scss";

class Item extends Component {
    render() {
        let { list } = this.props;
        let item = Object.keys(list);
        let cid = list[item].cid;
        return (
            <li className="list-item">
                <Link to={"/classDetail/" + cid + "?" + item}>
                    <div
                        className="img"
                        style={{
                            backgroundImage: `url(${rankPic})`
                        }}
                    />
                    <div className="content">
                        <h3>{item}</h3>
                        <p>
                            {list[item].list.map(title => {
                                return <span key={title}>{title}</span>;
                            })}
                        </p>
                    </div>
                </Link>
            </li>
        );
    }
}

export default Item;
