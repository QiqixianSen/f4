import React,{ Component } from "react";
import { Button } from 'antd-mobile';
import '../index.scss'

class Footer extends Component{
    render(){
        return(
            <div className='footer-wrap'>
              <Button type="primary">点击下载客户端</Button>
              <div>
              <p className="bs-slogan">海量图书，更高品质阅读体验</p>
              <p>©2016 码农 f4.com</p>
              <p>湘ICP备53078413号-1</p>
              <p>网络文化经营许可证：湘网文[2017]3018-4549号</p>
              <p>增值电信业务经营许可证：粤B2-20130742</p>
              <p>深圳文学信息技术有限公司 版权所有</p>
              <p>中国大陆广东市深圳市南山区腾讯大厦1栋6666</p>
              <p>0571-66666666666</p>
              <p>666666666</p>
              </div>
            </div>
            
        )
    }
}

export default Footer