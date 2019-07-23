import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators'
import Header from "./components/home-header";
import HomeNav from "./components/home-nav";
import Giftware from "./components/Giftware";
import Girls from "./components/Girls";
import Boys from "./components/Boys";
import NewBooks from "./components/NewBooks";
import Bestsellers from "./components/Bestsellers";
import Choiceness from "./components/Choiceness";
import Recommend from "./components/Recommend";
import Footer from '../../common/footer'

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <HomeNav />
                <Giftware />
                <Girls getGirls={this.props.getGirls} />
                <Boys />
                <NewBooks />
                <Bestsellers />
                <Choiceness />
                <Recommend />
                <Footer />

            </div>
        );
    }
    componentDidMount(){
        this.props.getRem()
        this.props.getBest()
        this.props.getGirls()
    }
}

const mapDispatch=(dispatch)=>({
    getRem(){
        dispatch(actionCreators.getRemList())
      },
      getBest(){
        dispatch(actionCreators.getBestList())
      },
      getGirls(){
        dispatch(actionCreators.getGirlsList())
      }

})

export default connect(null,mapDispatch)(Home);
