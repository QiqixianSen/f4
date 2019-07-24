import React,{Component} from 'react';
import '../style.scss';
import { Button,Icon,List} from 'antd-mobile';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators'

class Book extends Component{
    constructor(){
        super()
        this.state={
            show:false
        }
        this.changeShow=this.changeShow.bind(this)
    }
    
    render(){
        return(
        
            <div className='book-detail'>
                    <div>
                <div className='book-info'>
                    <img src={this.props.book_cover}  alt=""/>
                    <div>
                        <h4 className='book-title'>
                        {this.props.bookname}
                        </h4>
                        <p className='book-author'>{this.props.author_name}</p>
                        <p className='book-tag'>
                        <span>青春校园</span>
                        <span>{this.props.size}字</span>
                        </p>
                        <p className="book-author">已完结</p>
                    </div>
                </div>
                <div className='book-choice'>
                <Button type="primary" inline style={{background:"red"}}>继续阅读</Button>
                <Button type="primary" inline style={{background:"#fff",color:'#108ee9'}}>继续下载</Button>
                <Button type="primary" inline style={{background:"#fff",color:'#108ee9'}} onClick={()=>{this.props.addCart(this.props.book_cover,this.props.bookname)}}>加入书架</Button>
                </div>
                <div className='book-desc'>
                    <p className={this.state.show?'p-spe':" "}>
                    {this.props.book_info}
                    </p>
                    <Icon type={this.state.show?'up':'down'} className='icon' onClick={this.changeShow}/>
                </div>
                </div>            
                <List className="my-list" style={{marginTop:"10px"}}>
                <List.Item arrow="horizontal" multipleLine onClick={() => {}}>
                <i className='iconfont icon-3lishi'></i><i>最新</i><span>{this.props.stat_name}</span>
                </List.Item>
                <List.Item arrow="horizontal" multipleLine onClick={() => {}}>
                <i className='iconfont icon-mulu'></i><i>目录</i><span>18小时前更新</span>
                </List.Item>
                </List>
                <div className='white-space'></div>
            </div>
        )
    }
    changeShow(){
        this.setState({
            show:!this.state.show
        })
    }

}
const mapState=(state)=>({
    list:state.detail.detailList,
    bid:state.home.bid,
  author_name:state.home.author_name,
  book_cover:state.home.book_cover,
  book_info:state.home.book_info,
  bookname:state.home.bookname,
  size:state.home.size,
  stat_name:state.home.stat_name,

})

const mapDispatch=(dispatch)=>({
    addCart(image,title){
        dispatch(actionCreators.add(image,title))
    }
})
export default connect(mapState,mapDispatch)(Book) 