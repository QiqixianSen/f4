import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./item.scss";
import bg from "../../../statics/images/sortnav.png";

class Item extends Component {
    render() {
        let { list, index } = this.props;
        return (
            <li className="list-item">
                <Link to="">
                    <div
                        className="img"
                        style={{
                            backgroundImage: `url(${bg})`
                        }}
                    />
                    <div className="content">
                        <h3>{list.title}</h3>
                        <p>{list.desc}</p>
                    </div>
                </Link>
            </li>
        );
    }
}

export default Item;
