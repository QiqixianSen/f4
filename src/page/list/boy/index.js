import React,{Component}  from 'react'
import { connect } from 'react-redux'
import Boys from "../../home/components/Boys"
import Footer from "../../../common/footer"

class Boysbook extends Component{
 render() {
  return (
   <div>

    <Boys></Boys>
    <Footer/>
    
    </div>
   )
  }
}
export default Boysbook;




