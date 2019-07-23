import React, { Component } from "react";
import Header from "../../common/header";
import ajax from "../../ajax/server";
import "./index.scss";

class ClassDetail extends Component {
    state = {
        classfication: [],
        content: {}
    };
    render() {
        let { location } = this.props;
        let name = decodeURI(location.search.substring(1));
        return (
            <div className="classdetail">
                <Header {...this.props}>{name}</Header>
                <div className="classfication">
                    <div className="all">
                        <ul>
                            <li>全部</li>
                            {this.state.classfication.map(item => {
                                return <li key={item.id}>{item.name}</li>;
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
            cid: 21,
            timestamp: 1563863797059,
            sign: "9ca188661880712acfd4c180e970fda3",
            shuqi_h5: ""
        }).then(res => {
            this.setState({
                classfication: [...res.data.data.class, ...res.data.data.tag]
            });
        });
        ajax.get(
            "http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=&shuqi_h5=&onlyCpBooks=1&secondCate=%E7%8E%B0%E4%BB%A3%E8%A8%80%E6%83%85&sort=monthHot&_=1563871763457"
        ).then(res => {
            this.setState({
                content: res.data
            });
        });
    }
}

export default ClassDetail;
