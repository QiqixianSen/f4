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
import ClassDetail from "./page/classdetail";
import Boysbook from "./page/list/boy";
import Girlsbook from "./page/list/girl";
import Booklist from "./page/list/booklist";
import Search from "./page/search";
import Bookstore from "./page/bookstore";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/bookstore" component={Bookstore} />
              <Route path="/search" component={Search} />
              <Route path="/girl" component={Girlsbook} />
              <Route path="/boy" component={Boysbook} />
              <Route path="/booklist" component={Booklist} />
              <Route path="/ranking" component={Ranking} />
              <Route path="/sorts" component={Sorts} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/detail/:id" component={Detail} />
              <Route path="/classdetail" component={ClassDetail} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
