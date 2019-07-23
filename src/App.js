import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./page/home";
import Detail from "./page/detail";
import Login from "./page/login";
import Ranking from "./page/list/ranking";
import Sorts from "./page/list/sorts";
import Register from "./page/register";

class App extends Component {
    render() {
        return (
          <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/ranking" component={Ranking} />
                        <Route path="/sorts" component={Sorts} />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                        <Route path="/detail" component={Detail} />
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </BrowserRouter>
          </Provider>
        );
    }
}
export default App;
