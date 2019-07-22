import React,{Component} from 'react';
import '../style.scss';
import '../../../statics/font_1307227_9qrecju4ty/iconfont.css';

class Giftware extends Component{
  render(){
    return (
      <div className="home-gift-ware">
        <div>
          <div className='title-header'>
            <i className='iconfont icon-AffordableCredit gift'></i>
            <h3 className='home-title'>精品推荐</h3>
          </div>
         
          <ul className='title-ul'>
            <li className='title-li'>
              <img className='cover-img' src="http://img-tailor.11222.cn/bcv/big/1179627851191.jpg" alt=""/>
              <p className='book-name'>蛋炒鱿鱼</p>
              <span className='book-author'>扇叶</span>

            </li>
            <li className='title-li'>
              <img className='cover-img' src="http://img-tailor.11222.cn/bcv/big/1179627851191.jpg" alt=""/>
              <p className='book-name'>蛋炒鱿鱼</p>
              <span className='book-author'>扇叶</span>

            </li>
            <li className='title-li'>
              <img className='cover-img' src="http://img-tailor.11222.cn/bcv/big/1179627851191.jpg" alt=""/>
              <p className='book-name'>蛋炒鱿鱼</p>
              <span className='book-author'>扇叶</span>

            </li>
            <li className='title-li'>
              <img className='cover-img' src="http://img-tailor.11222.cn/bcv/big/1179627851191.jpg" alt=""/>
              <p className='book-name'>蛋炒鱿鱼</p>
              <span className='book-author'>扇叶</span>

            </li>
          </ul>
          <div className='home-change'>
            <span>换一换</span>
            <i className='iconfont icon-huanyihuan'></i>
          </div>
          <div className='white-space'></div>
        </div>
      </div>
        
    )
}
}

export default Giftware