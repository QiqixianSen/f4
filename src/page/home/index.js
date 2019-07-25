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
let obj = {};
class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <HomeNav />
                <Giftware />
                <Girls {...this.props}>女生美文</Girls>
                <Boys {...this.props}>男生热文</Boys>
                <NewBooks />
                <Bestsellers {...this.props}>小奇畅销榜</Bestsellers>
                <Choiceness />
                <Recommend />
                <Footer />

            </div>
        );
    }

}
export default connect(null,null)(Home);
