import React, { Component } from "react";
import Header from "../../../common/header";
import ajax from "../../../ajax/server";
import Item from "./item";

import "./index.scss";

export default class Ranking extends Component {
    state = {
        boy: [],
        girl: []
    };
    render() {
        return (
            <div>
                <Header {...this.props}>分类</Header>

                <div className="rank-list">
                    <div className="girl">
                        <h2>女生分类</h2>
                        {this.state.girl.map((item, index) => {
                            return <Item list={item} key={index} />;
                        })}
                    </div>
                    <div className="boy">
                        <h2>男生分类</h2>
                        {this.state.boy.map((item, index) => {
                            return <Item list={item} key={index} />;
                        })}
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        ajax.post("/webapi/rank/classrelation?_=1563795056739", {
            type: 1,
            timestamp: 1563800087804,
            sign: "0d6d614f92bd41918511006e8907302c",
            shuqi_h5: ""
        }).then(res => {
            this.setState({
                boy: res.data.data.boy,
                girl: res.data.data.girl
            });
        });
    }
}
