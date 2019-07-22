<<<<<<< HEAD
import React,{Component} from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store'
import Home from './page/home'
import Detail from './page/detail'
import Booklist from "./page/list/booklist";

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div>
          <Switch>
          <Route path='/booklist' component={Booklist} />
              <Route path='/detail' component={Detail} />
            <Route path='/' component={Home} />
            
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
=======
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
// import store from "./store";
import Home from "./page/home";
import Detail from "./page/detail";
import Login from "./page/login";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/detail" component={Detail} />
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
>>>>>>> 38318fe164371705b414f664f0ad190993823e7e
}
export default App;
