import React, { Component } from 'react';
import axios from 'axios'
import {
    Link
} from 'react-router-dom';
import { Ip } from '../ip.js'
import { Badge, WhiteSpace, List } from 'antd-mobile';


class User extends Component {

    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div>
                    <div style={{ backgroundColor: '#D43D34', display: 'flex', justifyContent: "space-between", alignItems: "center", padding: '1rem 0' }}>
                        <div className='rotate' onClick={this.clickBack.bind(this)}><img src='./b/am2.png' style={{ width: '.9rem' }} alt='' /></div>
                        <div style={{ color: 'white', textAlign: 'center', width: "100%", margin: "0 auto" }}>账号</div>
                        <div style={{ paddingRight: '1rem' }}><img src='./b/ok.png' alt='' style={{ width: '2.2rem', height: '2.2rem', marginTop: '.2rem' }} /></div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: "space-between", padding: '1rem 1rem', alignItems: 'center' }}>
                        <div style={{ display: 'flex', padding: '0 0rem', alignItems: 'center' }}>
                            <div>
                                <img src='./b/1111.png' style={{ width: '4rem' }} alt='' />
                            </div>
                            <div style={{ paddingLeft: '.8rem', textAlign: 'left' }}>
                                <div>我是名字</div>
                                <div style={{ color: 'gray' }}><i>Lv</i>.<span style={{ fontSize: '.8rem' }}>8</span></div>
                            </div>
                        </div>
                        <div>
                            <span style={{ padding: '.5rem', border: ".05rem solid #D43D34", color: 'gray', borderRadius: '1rem' }}>
                                <span><img src='./b/ai6.png' alt='' style={{ width: '1.5rem', paddingRight: '.5rem', verticalAlign: 'bottom' }} /></span>签到</span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderTop: '.05rem solid gray' }}>
                        <div style={{ padding: '0rem 2rem', borderRight: '.05rem solid gray' }}>
                            <div style={{ color: 'gray',paddingBottom:'.5rem' }}>动态</div>
                            <div>1</div>
                        </div>
                        <div style={{ padding: '0rem 2rem', borderRight: '.05rem solid gray' }}>
                            <div style={{ color: 'gray',paddingBottom:'.5rem'  }}>关注</div>
                            <div>1</div>
                        </div>
                        <div style={{ padding: '0rem 2rem', borderRight: '.05rem solid gray' }}>
                            <div style={{ color: 'gray' ,paddingBottom:'.5rem' }}>粉丝</div>
                            <div>2</div>
                        </div>

                        <Link to='/reg'><div style={{ padding: '0rem 2rem' }}>
                            <div>
                                <Badge dot>
                                    <img src='./b/p0.png' style={{ width: '2.2rem' }} alt='' />
                                </Badge>
                            </div>
                            <div style={{ fontSize: '.8rem', color: 'gray' }}>我的资料</div>
                        </div></Link>

                    </div>
                    <WhiteSpace style={{ backgroundColor: '#F5F5F9' }} />

                    <div>
                        <List.Item arrow="horizontal" onClick={() => { }}> <img src='/b/ak2.png' alt='' /><span style={{paddingLeft:'.6rem'}}>我的消息</span></List.Item>
                        <WhiteSpace style={{ backgroundColor: '#F5F5F9' }} />
                        <List.Item arrow="horizontal" onClick={() => { }}> <img src='/b/aka.png' alt='' /><span style={{paddingLeft:'.6rem'}}>会员中心</span></List.Item>
                        <List.Item arrow="horizontal" onClick={() => { }}> <img src='/b/ak8.png' alt='' /><span style={{paddingLeft:'.6rem'}}>商城</span></List.Item>
                        <List.Item arrow="horizontal" onClick={() => { }}> <img src='/b/ajx.png' alt='' /><span style={{paddingLeft:'.6rem'}}>在线听歌免流量</span></List.Item>
                        <WhiteSpace style={{ backgroundColor: '#F5F5F9' }} />
                        <List.Item arrow="horizontal" onClick={() => { }}> <img src='/b/ajx.png' alt='' /><span style={{paddingLeft:'.6rem'}}>设置</span></List.Item>
                        <List.Item arrow="horizontal" onClick={() => { }}> <img src='/b/a0d.png' alt='' /><span style={{paddingLeft:'.6rem'}}>扫一扫</span></List.Item>
                        <List.Item arrow="horizontal" onClick={() => { }}> <img src='/b/ak7.png' alt='' /><span style={{paddingLeft:'.6rem'}}>个性换肤</span></List.Item>
                        <List.Item arrow="horizontal" onClick={() => { }}> <img src='/b/ak9.png' alt='' /><span style={{paddingLeft:'.6rem'}}>定时关闭</span></List.Item>
                        <List.Item arrow="horizontal" onClick={() => { }}> <img src='/b/ajs.png' alt='' /><span style={{paddingLeft:'.6rem'}}>音乐闹钟</span></List.Item>
                        <List.Item arrow="horizontal" onClick={() => { }}> <img src='/b/ak_.png' alt='' /><span style={{paddingLeft:'.6rem'}}>驾驶模式</span></List.Item>


                    </div>

                </div>
            </div>
        )
    }

    //后退一页
    clickBack() {
        this.props.history.goBack()
    }


}

export default User;