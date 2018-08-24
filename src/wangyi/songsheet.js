import React, { Component } from 'react';
import axios from 'axios'
import {
    Link
} from 'react-router-dom';
import { connect } from "react-redux";  
import { Ip } from '../ip.js'
import { getSong } from '../store/action.js'
import { getNextMusic } from '../store/action.js'

class SongSheet extends Component {

    constructor() {
        super()
        this.state = {
            id: '',
            type: [],
            name: '',
            img: '',
            users: '',
            head: '',
            comment: '',
            forward: '',
            location: '',
            length: '',
            singer: '',
            bcimg:''
        }
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <div className='beijingse' >
                            <div >
                                <div className='beijingse' style={{ position: 'fixed', top: '0', width: '100%', zIndex: '2', display: 'flex', justifyContent: "space-between", alignItems: "center", padding: '1rem 0',}}>
                                    <div className='rotate'><Link to='/main/index'><img src='./b/am2.png' style={{ width: '.9rem' }} alt='' /></Link></div>
                                    <div style={{ color: 'white', textAlign: 'center', width: "100%", margin: "0 auto" }}>歌单</div>
                                    <div style={{ paddingRight: '1rem' }}><img src='./b/ok.png' alt='' style={{ width: '2.2rem', height: '2.2rem', marginTop: '.2rem' }} /></div>
                                </div>
                                <div  className='beijingse' style={{ height: '4.7rem' }}></div>
                            </div>

                            <div>

                                <div style={{ color: 'white', display: 'flex', justifyContent: "space-around", marginTop: '.0rem' }}>
                                    <div><img src={this.state.img} style={{ width: '11rem',borderRadius:'.5rem'  }} alt='' /></div>
                                    <div style={{ width: '40%' }}>
                                        <div style={{ textAlign: 'left', marginTop: '2rem' }}>
                                            {this.state.name}
                                        </div>
                                        <div style={{ display: 'flex', marginTop: '2rem', alignItems: "center" }}>
                                            <div><img src={this.state.head} style={{ width: '2.2rem' }} alt='' /> </div>
                                            <div style={{ paddingLeft: '1rem' }}>{this.state.users} <img src='./b/aa7.png' style={{ width: '.7rem', verticalAlign: 'bottom' }} /></div>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', justifyContent: "space-around", padding: '1rem 0rem', marginTop: '.3rem' }}>
                                    <figcaption>
                                        <img src='./b/a2j.png' style={{ width: '2rem' }} alt='' />
                                        <div style={{ color: 'white', paddingTop: '.2rem' }}>{this.state.location}</div>
                                    </figcaption>
                                    <figcaption>
                                        <img src='./b/a2h.png' style={{ width: '2rem' }} alt='' />
                                        <div style={{ color: 'white', paddingTop: '.2rem' }}>{this.state.comment}</div>
                                    </figcaption>
                                    <figcaption>
                                        <img src='./b/a2m.png' style={{ width: '2rem' }} alt='' />
                                        <div style={{ color: 'white', paddingTop: '.2rem' }}>{this.state.forward}</div>
                                    </figcaption>
                                    <figcaption>
                                        <img src='./b/a2i.png' style={{ width: '2rem' }} alt='' />
                                        <div style={{ color: 'white', paddingTop: '.2rem' }}>下载</div>
                                    </figcaption>
                                </div>
                            </div>

                        </div>

                        <div style={{ marginTop: '-.8rem', backgroundColor: 'white', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem', display: 'flex', justifyContent: "space-between", alignItems: "center", textAlign: 'center', padding: '1rem', borderBottom: '.1rem solid gray', borderTop: '.1rem solid gray' }}>
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

                    <div>
                        {this.state.type.map((item, value) => {
                            return <Link to={{ pathname: '/audio' }} key={value} onClick={this.clickGetType.bind(this, item)}><div key={value} style={{ display: 'flex', justifyContent: "space-between", borderBottom: '1px solid gray', alignItems: "center", margin: '0 1rem', padding: '.7rem 0' }}>
                                <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center", textAlign: 'left' }}>
                                    <div style={{ color: 'gray', fontSize: '1.4rem' }}>{value + 1}</div>
                                    <div style={{ paddingLeft: '1rem' }}>
                                        <div style={{ fontSize: '1.2rem', color: 'black' }}>{item.name}</div>
                                        <div style={{ color: 'gray', paddingTop: '.3rem', fontSize: '1rem' }}>{item.singer}-{item.album}</div>
                                    </div>
                                </div>
                                <div>
                                    <img src='./b/a0s.png' style={{ width: '2rem' }} alt='' />
                                    <img src='./b/a0n.png' style={{ width: '2rem' }} alt='' />
                                </div>
                            </div>
                            </Link>
                        })}
                    </div>

                </div>

            </div>
        )
    }
    componentWillMount() {
        console.log(Ip)
        this.state.id = this.props.location.search.slice(1, this.props.location.search.length)
        axios.get(Ip + '/getmusic', { params: { _id: this.state.id } }).then((msg) => {
            this.props.dispatch(getSong(msg.data))
            this.setState({
                name: msg.data.name,
                img: Ip + msg.data.img,
                users: msg.data.user,
                head: Ip + msg.data.head,
                comment: msg.data.comment,
                forward: msg.data.forward,
                location: msg.data.location,
                length: msg.data.musicId.length,
                singer: msg.data.singer,
                bcimg:Ip + msg.data.img
            })


            for (let i = 0; i < msg.data.musicId.length; i++) {
                axios.get(Ip + '/getmusics', { params: { _id: msg.data.musicId[i] } }).then((msg) => {
                    this.state.type.push(msg.data);
                    this.setState({})
                })
            }
        })
    }

    clickGetType(item) {
        this.props.dispatch(getNextMusic(item))
    }

}


export default connect()(SongSheet);