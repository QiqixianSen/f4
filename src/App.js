import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
// import store from './store'
import Home from "./page/home";
import Detail from "./page/detail";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/detail" component={Detail} />
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
export default App;
