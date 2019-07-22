import React, {Component} from 'react'
import Giftware from './components/Giftware'
import Girls from './components/Girls'
import Boys from './components/Boys'
import NewBooks from './components/NewBooks'
import Bestsellers from './components/Bestsellers' 
import Choiceness from './components/Choiceness'
import Recommend from './components/Recommend'

class Home extends Component{
    render(){
      return (
        <div>
            <Giftware></Giftware>
            <Girls></Girls>
            <Boys></Boys>
            <NewBooks></NewBooks>
            <Bestsellers></Bestsellers>
            <Choiceness></Choiceness>
            <Recommend></Recommend>
        </div>
          
      )
  }
  }
  
  export default Home