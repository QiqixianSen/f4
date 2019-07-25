import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators'
import { Link } from 'react-router-dom';
import '../style.scss';
import '../../../statics/font_1307227_9qrecju4ty/iconfont.css';

class Boys extends Component{
  render(){
    return (
        <div>
          <div className='title-header'>
            <i className='iconfont icon-ChildhoodDevelopment boy'></i>
            <h3 className='home-title'>{this.props.children}</h3>
          </div>
          
          <ul className='title-ul'>
        
        {this.props.boyList.map((item,index)=>{
          if(index<4){
            return(
              <Link key={item.bid} to={`/detail/authorId=${item.author}&bookId=${item.bid}&authorName=${item.author_name}&id=7894750`} >
              <li className='title-li' key={item.bid} onClick={()=>{this.props.handleDetail(item.bid,item.author_name,item.book_cover,item.book_info,item.bookname,item.size,item.stat_name)}}>
                <img className='cover-img' src={item.book_cover} alt=""/>
                <p className='book-name'>{item.bookname}</p>
              <span className='book-author'>{item.author_name}</span>

            </li>
            </Link>
            )
          }
          
        })}
        </ul>
        <ol className='book-ol'>
        {this.props.boyList.map((item,index)=>{
          if(index>=4){
              return(
                <Link key={item.bid} to={`/detail/authorId=${item.author}&bookId=${item.bid}&authorName=${item.author_name}&id=7520816`} >
                <li className='book-item' key={item.bid} onClick={()=>{this.props.handleDetail(item.bid,item.author_name,item.book_cover,item.book_info,item.bookname,item.size,item.stat_name)}}>
                  <div className='book-item-top'>
                    <h6 className='book-item-name'>{item.bookname}</h6>
                    <div className='book-item-tag'>
                    <span className="tag-spe">{item.stat_name}</span>
                      {item.tag.slice(0, 1).map((tag,index) => {
                      return <span key={index}>{tag}</span>;
                    })}
                    </div>
                  </div>
                  <p className='book-item-desc one'>{item.book_info}</p>
            </li>
            </Link>
              )
            }
          
        })}
          </ol> 
        <div className='home-change' onClick={this.props.changeBoyList}>
          <span>换一换</span>
          <i className='iconfont icon-huanyihuan'></i>
        </div>
        <div className='white-space'></div>
      </div>
      
  )
  }
  componentDidMount() {
    
    this.props.getGirls()
  }
}
const mapState = (state)=>({
boyList:state.home.boyList
})

//获取数据
const mapDispatch=(dispatch)=>({
  changeBoyList(){
    dispatch(actionCreators.changeBoyListInfo())
  },
  handleDetail(bid,author_name,book_cover,book_info,bookname,size,stat_name){
    dispatch(actionCreators.getInfo(bid,author_name,book_cover,book_info,bookname,size,stat_name))
  },
  getGirls(){
    dispatch(actionCreators.getGirlsList())
  }
})



export default connect(mapState,mapDispatch)(Boys)
