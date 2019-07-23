import React, { Component } from "react";
import Header from "../../../common/header";
import Footer from "../../../common/footer";
import ajax from "../../../ajax/server.js";
import api from "../../../ajax/api.js";
import Item from "./item";

import "./index.scss";

export default class Ranking extends Component {
    state = {
        boy: [
            {
                都市: {
                    cid: 51,
                    relatedName: "都市小说",
                    list: [
                        "生活",
                        "异能",
                        "重生",
                        "热血",
                        "人生",
                        "美女",
                        "极道江湖"
                    ]
                }
            },
            {
                玄幻: {
                    cid: 1,
                    relatedName: "玄幻小说",
                    list: ["东方玄幻", "异界大陆", "转世重生", "远古神话"]
                }
            },
            {
                仙侠: {
                    cid: 133,
                    relatedName: "仙侠小说",
                    list: ["现代修真", "奇幻修真", "洪荒封神", "凡人", "丹药"]
                }
            },
            {
                灵异: {
                    cid: 41,
                    relatedName: "灵异推理",
                    list: ["灵异鬼怪", "恐怖惊悚", "悬疑探险", "侦探推理"]
                }
            },
            {
                历史: {
                    cid: 125,
                    relatedName: "历史架空",
                    list: ["架空历史", "两宋元明", "秦汉三国", "权谋", "乱世"]
                }
            },
            {
                游戏: {
                    cid: 40,
                    relatedName: "游戏竞技",
                    list: ["虚拟网游", "游戏异界", "游戏人生", "系统"]
                }
            },
            {
                科幻: {
                    cid: 62,
                    relatedName: "科幻小说",
                    list: [
                        "未来",
                        "进化变异",
                        "末世",
                        "星际",
                        "机甲",
                        "时空穿梭"
                    ]
                }
            },
            {
                武侠: {
                    cid: 8,
                    relatedName: "武侠小说",
                    list: ["传统武侠", "新派武侠", "幻武异侠", "江湖风波"]
                }
            },
            {
                奇幻: {
                    cid: 135,
                    relatedName: "奇幻小说",
                    list: ["领主贵族", "亡灵异族", "西方奇幻", "魔法", "召唤"]
                }
            },
            {
                竞技: {
                    cid: 12,
                    relatedName: "竞技体育",
                    list: ["电子竞技", "体坛风云", "球类运动"]
                }
            },
            {
                其他: {
                    cid: 263,
                    relatedName: "耽美小说",
                    list: ["动漫", "影视", "武侠", "小说"]
                }
            }
        ],
        girl: [
            {
                现言: {
                    cid: 21,
                    relatedName: "现代言情",
                    list: ["豪门总裁", "婚姻", "都市情感", "宝宝"]
                }
            },
            {
                古言: {
                    cid: 20,
                    relatedName: "古代言情",
                    list: [
                        "穿越",
                        "架空",
                        "宫斗宅斗",
                        "情仇爱恨",
                        "女尊",
                        "种田"
                    ]
                }
            },
            {
                幻言: {
                    cid: 224,
                    relatedName: "幻想言情",
                    list: ["仙侣奇缘", "江湖奇缘"]
                }
            },
            {
                校园: {
                    cid: 18,
                    relatedName: "校园青春",
                    list: ["青春年华", "校园魔幻", "青春校园", "学生"]
                }
            }
        ]
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
    // componentDidMount() {
    //     console.log(11);
    //     ajax.post(api.RANK_API, {
    //         type: 1,
    //         timestamp: 1563800087804,
    //         sign: "0d6d614f92bd41918511006e8907302c",
    //         shuqi_h5: ""
    //     }).then(res => {
    //         console.log(res);
    //     });
    // }
}
