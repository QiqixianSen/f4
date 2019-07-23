import React, { Component } from "react";
import Header from "../../../common/header";
import Footer from "../../../common/footer";
import Item from "./item";
import ajax from "../../../ajax/server.js";
import api from "../../../ajax/api.js";
import "./index.scss";

export default class index extends Component {
    state = {
        list: []
    };
    render() {
        return (
            <div className="sorts">
                <Header>排行</Header>
                <ul className="sorts-list">
                    {this.state.list.map((item, index) => {
                        return <Item list={item} index={index} />;
                    })}
                </ul>
                <Footer />
            </div>
        );
    }
    componentDidMount() {
        console.log(11);
        ajax.get(api.SORTS_API, {
            appId: 1,
            pageId: 4,
            channelId: "",
            versionId: "",
            ver: "",
            shuqi_h5: "",
            md5key: "",
            userId: 8000000,
            timestamp: 1563798299,
            type: 2,
            resetcache: "",
            sign: "ECE5E70BC3AFEF180DC58A8FB11D51D8",
            key: "shuqiapi",
            _: 1563798299992
        }).then(res => {
            console.log(res.data);
            let data = res.data.data.module.filter(item => {
                return item.func_id === "23";
            });
            let newdata = data.map(item => {
                return item.content;
            });
            this.setState({
                list: newdata
            });
        });
    }
}
