import React,{Component}  from 'react'
import { connect } from 'react-redux'
import Boys from "../../home/components/Boys"
import Footer from "../../../common/footer"
import Index from "../../../common/header"
class Boysbook extends Component{
 render() {
  return (
   <div>
   <Index/>
    <Boys></Boys>
    <Footer/>
    
    </div>
   )
  }
}
export default Boysbook;




