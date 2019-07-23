import React,{Component} from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
// import {Provider} from 'react-redux'
// import store from './store'
import Home from './page/home'
import Detail from './page/detail'
import Booklist from './page/list/booklist';
import Girlsbook from './page/list/girl';
import Boysbook from './page/list/boy';


class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/girl' component={Girlsbook} /> 
            <Route path='/boy' component={Boysbook} /> 
            <Route path='/booklist' component={Booklist} />
            <Route path='/detail' component={Detail} />
            <Route path='/' component={Home} />
            
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;
