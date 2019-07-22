import React,{Component} from 'react';
import '../style.scss';
import { Button,Icon,List} from 'antd-mobile';

class Book extends Component{
    render(){
        return(
            <div className='book-detail'>
                <div className='book-info'>
                    <img src="http://img-tailor.11222.cn/bcv/big/1187967935557.jpg" alt=""/>
                    <div>
                        <h4 className='book-title'>
                        她似奶糖
                        </h4>
                        <p className='book-author'>凉久</p>
                        <p className='book-tag'>
                        <span>青春校园</span>
                        <span>31万字</span>
                        </p>
                        <p className="book-author">已完结</p>
                    </div>
                </div>
                <div className='book-choice'>
                <Button type="primary" inline style={{background:"red"}}>继续阅读</Button>
                <Button type="primary" inline style={{background:"#fff",color:'#108ee9'}}>继续下载</Button>
                <Button type="primary" inline style={{background:"#fff",color:'#108ee9'}}>加入书架</Button>
                </div>
                <div className='book-desc'>
                    <p>
                    林青禾穿进了小说里成为书中一个炮灰女配，小说背景架空了要吃没吃，要穿没穿的六零年代，虽然物资匮乏生活单调，但这并不是她所担忧的，因为她有一个不大的随身空间，里边塞满了物资，暂保衣食无忧。
她担忧的是，要是她记得不错，她的三个便宜儿子未来会成为大反派ffffffffffffffffff ，
                    </p>
                    <Icon type='down' className='icon'/>
                </div>
                <List className="my-list" style={{marginTop:"10px"}}>
                <List.Item arrow="horizontal" multipleLine onClick={() => {}}>
                <i className='iconfont icon-3lishi'></i><i>最新</i><span>第五十章，谁能最主</span>
                </List.Item>
                <List.Item arrow="horizontal" multipleLine onClick={() => {}}>
                <i className='iconfont icon-mulu'></i><i>目录</i><span>18小时前更新</span>
                </List.Item>
                </List>
                <div className='white-space'></div>
            </div>
        )
    }
}

export default Book