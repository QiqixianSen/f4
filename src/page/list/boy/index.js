import React,{Component}  from 'react'
import { connect } from 'react-redux'
import Boys from "../../home/components/Boys"
import Footer from "../../../common/footer"
import Header from "../../../common/header"
import Hotlist from "../boy/component/hoslist"
import Bestsellers from "../../home/components/Bestsellers"

class Boysbook extends Component{
 render() {
  return (
   <div>
      <Header {...this.props}>男生专区</Header>
        <Boys {...this.props}>主编力荐</Boys>
        <Hotlist {...this.props}>热门男生分类</Hotlist>
        <Boys {...this.props}>男频新书</Boys>
        <Bestsellers {...this.props}>男生爽文榜</Bestsellers>
      <Footer></Footer>
    </div>
   )
  }
}
export default Boysbook;




