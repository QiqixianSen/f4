import React, { Component } from "react";
import Girls from "../../home/components/Girls";
import Bestsellers from "../../home/components/Bestsellers"
import Footer from "../../../common/footer"
import Hotlist from "./component/hoslist"
import Header from "../../../common/header"

class Girlsbook extends Component {
  render() {
    return (
      <div>
        <Header {...this.props}>女生专区</Header>
        <Girls {...this.props}>主编力荐</Girls>
        <Hotlist {...this.props}>热门女生分类</Hotlist>
        <Girls {...this.props}>女频新书</Girls>
        <Bestsellers {...this.props}>女生美文榜</Bestsellers>
        <Footer />
      </div>

    )
  }
}
export default Girlsbook;
