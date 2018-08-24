import React, { Component } from 'react';
import axios from 'axios'
import {
    Link
} from 'react-router-dom';
import { Carousel, SearchBar, Tabs } from 'antd-mobile';
import { Ip } from '../ip.js'

import { connect } from "react-redux";
import { getNextMusic } from '../store/action.js'
import $ from 'jquery';





class RecentlyMusic extends Component {

    constructor() {
        super()
        this.state = {
            length:'',
        }
    }

    render() {
        return (
            <div>
                <div>
                    <div style={{ backgroundColor: '#D43D34', display: 'flex', justifyContent: "space-between", alignItems: "center", padding: '1rem 0' }}>
                        <div className='rotate' onClick={this.clickBack.bind(this)}><img src='./b/am2.png' style={{ width: '.9rem' }} alt='' /></div>
                        <div style={{ color: 'white', textAlign: 'center', width: "100%", margin: "0 auto" }}>最近播放的歌曲</div>
                        <div style={{ paddingRight: '1rem' }}><img src='./b/ok.png' alt='' style={{ width: '2.2rem', height: '2.2rem', marginTop: '.2rem' }} /></div>
                    </div>

                    <div style={{  backgroundColor: 'white', display: 'flex', justifyContent: "space-between", alignItems: "center", textAlign: 'center', padding: '1rem', }}>
                        <div style={{ display: 'flex', justifyContent: "space-around", alignItems: "center" }}>
                            <img src='./b/a3d.png' style={{ width: '1.6rem', verticalAlign: 'bottom' }} alt='' />
                            <div style={{ fontSize: '1.2rem', paddingLeft: '1rem' }}>播放全部</div>
                            <div style={{ fontSize: '1rem', color: 'gray' }}>(共{this.state.length}首)</div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: "space-around", alignItems: "center" }}>
                            <img src='./b/q2.png' style={{ width: '1.6rem', verticalAlign: 'bottom' }} alt='' />
                            <div>多选</div>
                        </div>
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

function fliter(state){
    console.log(state)
}

export default connect(fliter)(RecentlyMusic);

