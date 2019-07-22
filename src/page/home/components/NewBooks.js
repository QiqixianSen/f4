import React,{Component} from 'react';
import '../style.scss';
import '../../../statics/font_1307227_9qrecju4ty/iconfont.css';

class NewBooks extends Component{
    render(){
      return (
          <div>
            <div className='title-header'>
              <i className='iconfont icon-ChildAbduction news'></i>
              <h3 className='home-title'>新书推荐</h3>
            </div>
            <div className= 'new-one'>
              <div className='new-left'>
                <img src="http://img-tailor.11222.cn/bcv/big/1147397894049.jpg" alt=""/>
                <span className='new-num'>1</span>
              </div>
              
              <div className='new-right'>
                <h4 className='new-title'>绝世神皇</h4>
                <span className='new-author'>自逍客</span>
                <p className='book-item-desc new-desc'>废物出身，家族凤梅很大很</p>
                <div className='book-item-tag new-tags'><span className='tag-spe'>连载</span><span>160万</span><span className='tag-red'>连载</span><span>连载</span></div>
              </div>

            </div>
            <ul className='new-ul'>
              <li className='new-li'>
                <i>2</i>
                <h3>重生之潇洒走一回</h3>
                <div className='book-item-tag '><span className='tag-spe'>连载</span><span>160万</span></div>
              </li>
              <li className='new-li'>
                <i>3</i>
                <h3>重生之潇洒走一回</h3>
                <div className='book-item-tag '><span className='tag-spe'>连载</span><span>160万</span></div>
              </li>
              <li className='new-li'>
                <i>4</i>
                <h3>重生之潇洒走一回</h3>
                <div className='book-item-tag '><span className='tag-spe'>连载</span><span>160万</span></div>
              </li>
            </ul>
            <div className='home-change'>
            <span>查看更多</span>
          </div>
          <div className='white-space'></div>
            </div>
      )
  }
  }
  
  export default NewBooks