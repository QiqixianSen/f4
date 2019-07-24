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
            <h3 className='home-title'>猛男标配</h3>
          </div>
          
          <ul className='title-ul'>
        
        {this.props.boyList.map((item,index)=>{
          if(index<4){
            return(
              <Link key={item.bid} to={'/detail/'+item.bid} >
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
        {this.props.boyList.map((item,index)=>{
          if(index>=4){
              return(
                <Link key={item.bid} to={'/detail/'+item.bid} >
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
        <div className='home-change' onClick={this.props.changeBoyList}>
          <span>换一换</span>
          <i className='iconfont icon-huanyihuan'></i>
        </div>
        <div className='white-space'></div>
      </div>
      
  )
}
}
const mapState = (state)=>({
boyList:state.home.boyList
})

//获取数据
const mapDispatch=(dispatch)=>({
  changeBoyList(){
    dispatch(actionCreators.changeBoyListInfo())
  }

})



export default connect(mapState,mapDispatch)(Boys)