import React, { Component } from "react";
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
                <Girls />
                <Boys />
                <NewBooks />
                <Bestsellers />
                <Choiceness />
                <Recommend />
                <Footer />

            </div>
        );
    }
}

export default Home;