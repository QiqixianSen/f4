import React, {Component} from 'react'
import axios from 'axios'
import Book from './components/Book'
import Comment from './components/Comment'
import Others from './components/Others'
import { Accordion} from 'antd-mobile';
import Footer from '../../common/footer'
import Header from '../../common/header'
class Detail extends Component{
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
      axios.get('http://bookstoreapi.shuqireader.com/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1563766945&type=2&resetcache=&func_id=12%2C33%2C11%2C28%2C33%2C12%2C33%2C11%2C19&orderid=31%2C32%2C33%2C34%2C35%2C36%2C37%2C38%2C39&sign=5F4FE9EC1F819E233F118669E05BF951&key=shuqiapi&_=1563766945700').then(res=>{
          console.log(res)
      })
  }
  }
  
  export default Detail