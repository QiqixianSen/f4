import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreators from '../store/actionCreators'
import '../style.scss';
import '../../../statics/font_1307227_9qrecju4ty/iconfont.css';


class Girls extends Component{
  render(){
    return (
        <div>
          <div className='title-header'>
            <i className='iconfont icon-AirPollution girl'></i>
            <h3 className='home-title'>萌妹专享</h3>
          </div>
          
          <ul className='title-ul'>
        
          {this.props.girlList.map((item,index)=>{
            if(index<4){
              return(
                <Link key={item.bid} to={`/detail/authorId=${item.author}&bookId=${item.bid}&authorName=${item.author_name}&id=7520816`} >
                <li className='title-li' key={item.bid}>
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
          {this.props.girlList.map((item,index)=>{
            if(index>=4){
                return(
                  <Link key={item.bid} to={`/detail/authorId=${item.author}&bookId=${item.bid}&authorName=${item.author_name}&id=7894750`} >
                  <li className='book-item' key={item.bid}>
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
          <div className='home-change' onClick={this.props.changeList}>
            <span>换一换</span>
            <i className='iconfont icon-huanyihuan'></i>
          </div>
          <div className='white-space'></div>
        </div>
        
    )
}
}
const mapState = (state)=>({
  girlList:state.home.girlList
})

//获取数据
const mapDispatch=(dispatch)=>({
  changeList(){
    dispatch(actionCreators.changeListInfo())
  }

})



export default connect(mapState,mapDispatch)(Girls)