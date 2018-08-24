import React, { Component } from 'react';
import axios from 'axios'
import {
    Link
} from 'react-router-dom';
import { Carousel, SearchBar, Tabs } from 'antd-mobile';
import { Ip } from '../ip.js'
import { getSong } from '../store/action.js'
import { connect } from "react-redux";
import { getNextMusic } from '../store/action.js'
import $ from 'jquery';





class Index extends Component {

    constructor() {
        super()
        this.state = {
            type: [],
            music: [],
            songs: [],
            getmusic: [],
            tabs: [
                { title: '音乐' },
                { title: '视频' },
                { title: '电台' },
            ]
        }
    }

    render() {
        return (
            <div>


                <div>
                    <div style={{ position: 'fixed', width: '100%', top: '0rem', zIndex: '2', backgroundColor: 'white' }}>
                        <div style={{ backgroundColor: '#D33B32', display: 'flex', justifyContent: "space-around", }}>
                            <img src='./b/amc.png ' style={{ width: '2.5rem', height: '2.5rem', marginTop: '.3rem' }} alt='' />
                            <SearchBar style={{ width: '70%', backgroundColor: '#D33B32', color: 'white' }} placeholder="Search" maxLength={8} />
                            <img src='./b/ok.png' style={{ width: '2.2rem', height: '2.2rem', marginTop: '.2rem' }} alt='' />
                        </div>

                        {/* 单页应用 */}
                        {/* <div style={{ display: 'flex', justifyContent: "space-around", padding: '0', margin: '0' }}>
                                <div style={{ borderBottom: '.1rem solid red', padding: '1rem .2rem', }}>音乐</div>
                                <div style={{ padding: '1rem .2rem', }}>视频</div>
                                <div style={{ padding: '1rem .2rem', }}>电台</div>
                            </div> */}


                    </div>
                    <div style={{ height: '3.3rem', display: 'block',}}></div>

                    <Tabs style={{ color: 'white', overflow: 'auto' }} tabs={this.state.tabs} initalPage={'t2'} onChange={(tab, index) => { console.log('onChange', index, tab); }}>
                        <div style={{ backgroundColor: '#fff' }}>
                            {/* 轮播 */}
                            <div style={{ borderTop: '.05rem solid gray' }}>
                                <Carousel autoplay infinite >
                                    <img src='./b/1.jpg' style={{ width: '100%' }} alt='' />
                                    <img src='./b/2.jpg' style={{ width: '100%' }} alt='' />
                                    <img src='./b/3.jpg' style={{ width: '100%' }} alt='' />
                                    <img src='./b/4.jpg' style={{ width: '100%' }} alt='' />
                                    <img src='./b/5.jpg' style={{ width: '100%' }} alt='' />
                                </Carousel>
                            </div>

                            <div style={{ display: 'flex', justifyContent: "space-around", padding: '1rem 0rem', margin: '0' }}>
                                <figcaption>
                                    <img src='./b/t_recommend_icn_fm.png' style={{ width: '4rem' }} alt='' />
                                    <div style={{ paddingTop: '1rem' }}>私人FM</div>
                                </figcaption>
                                <figcaption>
                                    <img src='./b/t_recommend_icn_daily.png' style={{ width: '4rem' }} alt='' />
                                    <div style={{ paddingTop: '1rem' }}>每日推荐</div>
                                </figcaption>
                                <figcaption>
                                    <img src='./b/t_recommend_icn_playlist.png' style={{ width: '4rem' }} alt='' />
                                    <div style={{ paddingTop: '1rem' }}>歌单</div>
                                </figcaption>
                                <figcaption>
                                    <img src='./b/t_recommend_icn_rank.png' style={{ width: '4rem' }} alt='' />
                                    <div style={{ paddingTop: '1rem' }}>排行榜</div>
                                </figcaption>
                            </div>

                            {/* 推荐歌单 */}
                            <div style={{ padding: '1rem 0rem', borderTop: '.1rem solid gray', textAlign: 'left' }}>
                                <span style={{ borderLeft: '.2rem solid red', padding: ' 0 .4rem' }}></span> 推荐歌单<span><img src='./b/ag_.png' alt='' style={{ width: '0.8rem', marginLeft: '.4rem', verticalAlign: 'bottom' }} /></span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: "space-around", flexWrap: "wrap" }}>
                                {this.state.type.map((item, value) => {
                                    let a = Ip + item.img;
                                    return <div style={{ width: '33.3%', color: 'black' }} key={value}><Link to={{ pathname: '/songsheet', search: item._id }}>
                                        <div><img src={a} style={{ width: '8.2rem', borderRadius: '.5rem' }} alt='' /></div>
                                        <div style={{ textOverflow: "ellipsis", height: '2rem', width: '100%', overflow: "hidden", whiteSpace: "nowrap", paddingTop: '.5rem', color: 'black' }}>{item.name}</div></Link></div>
                                })}
                            </div>
                            {/* 最新音乐 */}
                            <div style={{ padding: '1rem 0rem', borderTop: '.1rem solid gray', textAlign: 'left' }}>
                                <span style={{ borderLeft: '.2rem solid red', padding: ' 0 .4rem' }}></span> 最新音乐<span><img src='./b/ag_.png' alt='' style={{ width: '0.8rem', marginLeft: '.4rem', verticalAlign: 'bottom' }} /></span>
                            </div>

                            <div style={{ display: 'flex', justifyContent: "space-around", flexWrap: "wrap" }}>
                                {this.state.music.map((item, value) => {
                                    let a = Ip + item.img;
                                    return <div style={{ width: '33.3%', color: 'black' }} key={value}>
                                        <Link to={{ pathname: '/audio' }} onClick={this.clickGetType.bind(this, item)}>
                                            <div><img src={a} style={{ width: '8.2rem', borderRadius: '.5rem' }} alt='' /></div>
                                            <div style={{ textOverflow: "ellipsis", textAlign: 'left', height: '3.3rem', overflow: "hidden", whiteSpace: "nowrap", paddingTop: '.5rem', color: 'black' }}>
                                                <div style={{ paddingLeft: '.3rem', textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.name}</div>
                                                <div style={{ color: 'gray', fontSize: '1rem', paddingTop: '.2rem', paddingLeft: '.3rem', textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.album}</div></div>
                                        </Link>
                                    </div>
                                })}
                            </div>
                        </div>

                        {/* 单页第二页 */}
                        <div>
                            <div style={{ height: "333rem", backgroundColor: 'green' }}></div>
                        </div>
                        {/* 单页第三页 */}
                        <div  style={{ height: "333rem", backgroundColor: 'yellow' }}> </div>
                    </Tabs>
                </div>
            </div>
        )
    }

    componentDidMount() {
        axios.get(Ip + '/getType', { params: {} }).then((msg) => {
            this.setState({
                type: msg.data,
                songs: msg.data
            })
        })

        setTimeout(() => {
            let num = this.state.songs.length;
            let randoms = parseInt(Math.random() * num + 0)
            //获取到歌单的id：this.state.songs[randoms]
            console.log(this.state.songs[randoms])
            this.props.dispatch(getSong(this.state.songs[randoms]))

            for (let i = 0; i < this.state.songs[randoms].musicId.length - 1; i++) {
                axios.get(Ip + '/getMusic_index', { params: { _id: this.state.songs[randoms].musicId[i] } }).then((msg) => {
                    this.state.music.push(msg.data)
                    this.setState({})
                })
            }
        }, 1000);

    }

    clickGetType(item) {
        console.log(item)
        this.props.dispatch(getNextMusic(item))
    }

}

export default connect()(Index);

