import React, { Component } from "react";
import Girls from "../../home/components/Girls";
import Bestsellers from "../../home/components/Bestsellers"
import Footer from "../../../common/footer"
import Hotlist from "./component/hoslist"
import Index from "../../../common/header"
class Girlsbook extends Component {
  render() {
    return (
      <div>
        <Index/>
        <Girls />
        <Hotlist />
        <Girls />
        <Bestsellers />
        <Footer />
      </div>

    )
  }
}
export default Girlsbook;
