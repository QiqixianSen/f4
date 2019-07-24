import React,{Component} from 'react';
import '../style.scss';
import { Button,Icon,List} from 'antd-mobile';
import { connect } from 'react-redux';

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
            {this.props.list.map(item=>{
                return (
                    <div>
                <div className='book-info'>
                    <img src={item.imgUrl}  alt=""/>
                    <div>
                        <h4 className='book-title'>
                        {item.bookName}
                        </h4>
                        <p className='book-author'>{item.authorName}</p>
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
                    <p className={this.state.show?'p-spe':" "}>
                    {item.desc}
                    </p>
                    <Icon type={this.state.show?'up':'down'} className='icon' onClick={this.changeShow}/>
                </div>
                </div>
                )
            })}
                
                
                 
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
    changeShow(){
        this.setState({
            show:!this.state.show
        })
    }

}
const mapState=(state)=>({
    list:state.detail.detailList
})
export default connect(mapState,null)(Book) 