import React, { Component } from "react";
import Header from "../../common/header";
import ajax from "../../ajax/server";
import "./index.scss";

class ClassDetail extends Component {
    state = {
        classfication1: [],
        classfication2: [],
        content: {}
    };
    cid = this.props.location.pathname.split("/")[2];
    render() {
        console.log(this.state);
        let { location } = this.props;
        let name = decodeURI(location.search.substring(1));
        name = name.split("?")[0];
        let derelatedName = decodeURI(location.search.substring(1)).split(
            "?"
        )[1];
        return (
            <div className="classdetail">
                <Header {...this.props}>{name}</Header>
                <div className="classfication">
                    <div className="all">
                        <ul>
                            <li
                                onClick={() => {
                                    this.getSortsItem(derelatedName, null);
                                }}
                            >
                                全部
                            </li>
                            {this.state.classfication1.map(item => {
                                return (
                                    <li
                                        key={item.id}
                                        onClick={() => {
                                            this.getSortsItem(item.relatedName);
                                        }}
                                    >
                                        {item.name}
                                    </li>
                                );
                            })}
                            {this.state.classfication2.map(item => {
                                console.log(this.state.classfication2);
                                return (
                                    <li
                                        key={item.id}
                                        onClick={() => {
                                            this.getSortsItem(item.relatedName);
                                        }}
                                    >
                                        {item.name}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="wordNum">
                        <ul>
                            <li>全部</li>
                            <li>20万字</li>
                            <li>20-100万字</li>
                            <li>100万字以上</li>
                        </ul>
                    </div>
                    <div className="newest">
                        <ul>
                            <li>最热</li>
                            <li>最新</li>
                            <li>完结</li>
                        </ul>
                    </div>
                </div>
                {this.state.content.data &&
                    this.state.content.data.map(item => {
                        return (
                            <div className="content" key={item.bid}>
                                <div className="new-one">
                                    <div className="new-left">
                                        <img src={item.cover} alt="" />
                                    </div>

                                    <div className="new-right">
                                        <h4 className="new-title">
                                            {item.title}
                                        </h4>
                                        <span className="new-author">
                                            {item.author}
                                        </span>
                                        <p className="book-desc-bb">
                                            {item.desc}
                                        </p>
                                        <div className="book-item-tag new-tags">
                                            <span className="tag-spe">
                                                {item.status === 1
                                                    ? "完结"
                                                    : "连载"}
                                            </span>
                                            <span>
                                                {Math.ceil(item.words / 10000)}
                                                万
                                            </span>
                                            <span className="tag-red">
                                                {item.tags.split(",")[0]}
                                            </span>
                                            <span>
                                                {item.tags.split(",")[1]}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        );
    }
    componentDidMount() {
        ajax.post("/webapi/rank/classrelation?_=1563863797060", {
            type: 2,
            cid: this.cid,
            timestamp: 1563863797059,
            sign: "9ca188661880712acfd4c180e970fda3",
            shuqi_h5: ""
        }).then(res => {
            this.setState({
                classfication1: [...res.data.data.class],
                classfication2: [...res.data.data.tag]
            });
        });
        this.getSortsItem(
            decodeURI(this.props.location.search.substring(1)).split("?")[1],
            decodeURI(this.props.location.search.substring(1)).split("?")[1]
        );
    }
    getSortsItem = (id, name) => {
        ajax.get(
            `http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=&shuqi_h5=&onlyCpBooks=1&firstCode=${name}&secondCate=${id}&sort=monthHot&_=1563871763457`
        ).then(res => {
            this.setState({
                content: res.data
            });
        });
    };
}

export default ClassDetail;
