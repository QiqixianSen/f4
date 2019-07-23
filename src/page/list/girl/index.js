import React, { Component } from "react";
import Girls from "../../home/components/Girls";
import Bestsellers from "../../home/components/Bestsellers"
import Footer from "../../../common/footer"
import Hotlist from "./component/hoslist"
class Girlsbook extends Component {
  render() {
    return (
      <div>
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
