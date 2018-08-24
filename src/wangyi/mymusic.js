import React, { Component } from 'react';
import axios from 'axios'
import {
    Link
} from 'react-router-dom';
import { connect } from "react-redux";
import { Ip } from '../ip.js'
import { WhiteSpace, List, Accordion } from 'antd-mobile';

class SongSheet extends Component {

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
                        <Link to='/main/index'><div className='rotate'><img src='./b/am2.png' style={{ width: '.9rem' }} alt='' /></div></Link>
                        <div style={{ color: 'white', textAlign: 'center', width: "100%", margin: "0 auto" }}>我的音乐</div>
                        <div style={{ paddingRight: '1rem' }}><img src='./b/ok.png' alt='' style={{ width: '2.2rem', height: '2.2rem', marginTop: '.2rem' }} /></div>
                    </div>

                    <div>
                        <List.Item arrow="horizontal" extra='1' onClick={() => { }}> <img src='/b/a0n.png' alt='' /><span style={{ paddingLeft: '.6rem' }}>本地音乐</span></List.Item>
                        <Link to='/recentlyMusic'><List.Item arrow="horizontal" extra='0' onClick={() => { }}> <img src='/b/a0q.png' alt='' /><span style={{ paddingLeft: '.6rem' }}>最近播放</span></List.Item></Link>
                        <List.Item arrow="horizontal" extra='0' onClick={() => { }}> <img src='/b/a0e.png' alt='' /><span style={{ paddingLeft: '.6rem' }}>我的电台</span></List.Item>
                        <List.Item arrow="horizontal" extra='0' onClick={() => { }}> <img src='/b/a0_.png' alt='' /><span style={{ paddingLeft: '.6rem' }}>我的收藏</span></List.Item>
                    </div>

                    <div>
                        <Accordion style={{textAlign:'left',fontSize:'.8rem',color:'gray' }} >
                            <Accordion.Panel header='我创建的歌单(0)' >
                                <div style={{padding:'1rem 0',textAlign:'center'}}>无</div>
                            </Accordion.Panel>
                        </Accordion>
                        <Accordion style={{textAlign:'left',fontSize:'.8rem',color:'gray' }} >
                            <Accordion.Panel header='我收藏的歌单(0)' >
                            <div style={{padding:'1rem 0',textAlign:'center'}}>无</div>
                                
                            </Accordion.Panel>
                        </Accordion>
                    </div>
                </div>
            </div>
        )
    }


}


export default connect()(SongSheet);