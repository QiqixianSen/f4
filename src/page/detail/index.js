import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import Book from './components/Book'
import * as actionCreators from './store/actionCreators'
import Comment from './components/Comment'
import Others from './components/Others'
import { Accordion} from 'antd-mobile';
import Footer from '../../common/footer'
import Header from '../../common/header'
class Detail extends Component{
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id
        }
    }
    
    render(){
      return (
        <div className='home'>
            <Header>书籍详情</Header>
            <Book />
            <Comment />
            <Others />
            <div className='info'>
                <i className='iconfont icon-AffordableCredit home-icon'></i>
                <Accordion>
                <Accordion.Panel header="图书相关信息" className="pad"><div><p>版权来源: <span style={{color:'green'}}> 码农F4</span></p><p>申择书名：本书的数字版权由纵横中文提供，授权本软件使用，制作,发行，若包含不良信息，请及时告知客服。</p></div></Accordion.Panel>
                </Accordion>
            
            </div>
            <div className='white-space'></div>
            <Footer style={{background:'#fff'}}/>

        </div>
          
      )
  }
  componentDidMount(){
    this.props.getBookInfo()
    this.props.getCommentInfo()
    this.props.getOtherInfo()
  }
  
  }

const mapDispatch=(dispatch,props)=>({
    getCommentInfo(){
        console.log(props)
        dispatch(actionCreators.getBooks(props.match.params.id))
    },
    getBookInfo(){
        console.log(props)
        dispatch(actionCreators.getBooksDetail(props.match.params.id))
    },
    getOtherInfo(){
        console.log(props)
        dispatch(actionCreators.getOtherDetail())
    }

})
  
  export default connect(null,mapDispatch)(Detail) 