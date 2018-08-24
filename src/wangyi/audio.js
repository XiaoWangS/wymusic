import React, { Component } from 'react';
import axios from 'axios'
import {
    Link
} from 'react-router-dom';
import { Ip } from '../ip.js'
import { connect } from "react-redux";
import { getNextMusic } from '../store/action.js'
import { getNewMusic } from '../store/action.js'
import { getNewSong } from '../store/action.js'
import { Toast, Progress } from 'antd-mobile';
import $ from 'jquery';


class Audio extends Component {

    constructor() {
        super()
        this.state = {
            id: '',
            percent: 0,
            ip: 'http://192.168.124.18:3000',
            flag: true,
            newMusic: [],
            newSong: []

        }
    }

    render() {
        return (
            <div id='html'>
                <div className='player' style={{ backgroundImage: `url('${Ip}${this.props.nextmusic.uimg}')` }}>
                    <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center", padding: '1rem 0' }}>
                        <div className='rotate' onClick={this.clickBack.bind(this)}><img src='./b/am2.png' style={{ width: '.9rem' }} alt='' /></div>
                        <div style={{ color: 'white', textAlign: 'center', width: "100%", margin: "0 auto" }}>{this.props.nextmusic.name}<div style={{ paddingTop: '.3rem' }}>{this.props.nextmusic.singer}</div></div>
                        <div style={{ paddingRight: '1rem' }}><img src='./b/ok.png' alt='' style={{ width: '2.2rem', height: '2.2rem', marginTop: '.2rem' }} /></div>
                    </div>

                    <div style={{ zIndex: '2', }}>
                        <img id='audio_img_rotate' src='./b/5555.png' style={{ width: '5rem', paddingLeft: '3.8rem', transform: "rotate(-23deg)" }} alt='' />
                    </div>
                    <div style={{ marginTop: '-4.5rem' }}>
                        <img src='./b/3333.png' style={{ width: '20rem' }} alt='' />
                    </div>
                    <div className='' id='bg-div' style={{ marginTop: '-16.8rem' }}>
                        <img src={Ip + this.props.nextmusic.img} style={{ width: '13rem', borderRadius: '50%' }} alt='' />
                    </div>

                    <div style={{ marginTop: '4rem', display: 'flex', justifyContent: "space-around", padding: '0 2rem' }}>
                        <div><img src='./b/acn.png' alt='' style={{ width: '4.5rem' }} /></div>
                        <div><img src='./b/ad3.png' alt='' style={{ width: '4.5rem' }} /></div>
                        <div><img src='./b/acy.png' alt='' style={{ width: '4.5rem' }} /></div>
                        <div><img src='./b/adf.png' alt='' style={{ width: '4.5rem' }} /></div>
                    </div>
                    <div className='abouts' style={{ color: 'white' }}>
                        {this.props.nextmusic.comment}
                    </div>

                    <div style={{ marginTop: '0rem', marginBottom: '0rem' }}>
                        <audio src={Ip + this.props.nextmusic.audio} id='vadio'></audio>
                    </div>

                    {/* 进度条 */}
                    <div style={{ padding: '.7rem 2rem' }}>
                        <Progress percent={this.state.percent} position="normal" unfilled={true} appearTransition />
                    </div>

                    <div style={{ display: 'flex', justifyContent: "space-around", alignItems: 'center' }}>
                        <div onClick={this.clickRandom.bind(this)}><img id='random' src='./b/ad_.png' alt='' style={{ width: '4.5rem' }} /></div>
                        <div onClick={this.clickUp.bind(this)}><img src='./b/akp.png' alt='' style={{ width: '3.2rem' }} /></div>
                        <div onClick={this.ckickSong.bind(this)}><img id='play' src='./b/akn.png' alt='' style={{ width: '4rem' }} /></div>
                        <div onClick={this.clickNext.bind(this)}><img src='./b/akk.png' alt='' style={{ width: '3.2rem' }} /></div>
                        <div><img src='./b/adz.png' alt='' style={{ width: '4.5rem' }} /></div>

                    </div>
                </div>
            </div>
        )
    }

  //滚动条
  progerss() {

    let vadio = document.getElementById('vadio')
    let i = 0;
    let time1 = setInterval(() => {
        i = vadio.currentTime
        this.state.percent = ((parseInt(vadio.currentTime) / parseInt(vadio.duration)) * 100)
        this.setState({})
        if (i === vadio.duration) {
            vadio.pause(); setEnd(); bgEnd(); this.state.percent = 0; clearInterval(time1)
        }
    }, 200)
}

    componentDidMount() {
            // import { Ip } from '../ip.js'
            setTimeout(() => {
            let play = document.getElementById('play');
            let vadio = document.getElementById('vadio')
            // vadio.play();    
            $('html').one('touchstart', function () {
                vadio.play();
            });


            // axios.get('http://192.168.124.18:9527/getOneMusic',{params:{}}).then((msg)=>{
            //     for(let i =0;i<msg.data.length;i++){
            //         if(msg.data[i].music._id!==this.props.nextmusic._id){
            //             console.log(i)
            //             console.log('循环的id',msg.data[i].music._id);
            //             console.log('z这首歌的id',this.props.nextmusic._id)
            //             console.log('changdu',msg.data.length)
            //             if(i==msg.data.length-1){
            //                 console.log('wodei',i)
            //                 let parem={
            //                     music:this.props.nextmusic
            //                 }  
            //                 axios.get('http://192.168.124.18:9527/addOneMusic',{params:parem}).then((msgs)=>{
            //                     console.log(msgs.data)
            //                 })
            //                 return;
            //             }

            //         }
            //     }
 
            // })

            bgBegin();
            setBegin();
            play.src = './b/act.png';
        }, 200)
        this.progerss()
    }

    //点击播放
    ckickSong() {
        console.log(222)
        let vadio = document.getElementById('vadio');
        let play = document.getElementById('play');
        let audio_img_rotate = document.getElementById('audio_img_rotate');
        if (vadio.paused) {
            vadio.play();
            bgBegin();
            audio_img_rotate.style.transition = ".5s "
            audio_img_rotate.style.transform = "rotate(-8deg)"
            play.src = './b/act.png';
            this.progerss();
        } else {
            vadio.pause();
            bgEnd();
            audio_img_rotate.style.transform = "rotate(-23deg)"
            play.src = './b/akn.png';

        }
    }
    //后退一页
    clickBack() {
        this.props.history.goBack()
    }
    //下一曲
    clickNext() {
        console.log('歌曲', this.props.nextmusic)
        let vadio = document.getElementById('vadio');
        let play = document.getElementById('play');
        for (let i = 0; i < this.props.songer.musicId.length; i++) {
            if (this.props.songer.musicId[i] == this.props.nextmusic._id) {
                if (this.state.flag) {
                    if (i + 1 == this.props.songer.musicId.length) {
                        play.src = './b/act.png';
                        setTimeout(() => {
                            axios.get(Ip + '/getAudio', { params: { _id: this.props.songer.musicId[0] } }).then((msg) => {
                                this.props.dispatch(getNextMusic(msg.data))
                                this.progerss();vadio.play();bgBegin();setBegin();
                            })
                        }, 200)
                    } else {
                        play.src = './b/act.png';
                        setTimeout(() => {
                            axios.get(Ip + '/getAudio', { params: { _id: this.props.songer.musicId[i + 1] } }).then((msg) => {
                                this.props.dispatch(getNextMusic(msg.data))
                                vadio.play();bgBegin();this.progerss();setBegin();
                            })
                        }, 200)
                    }
                } else {
                    let num = this.props.songer.musicId.length;
                    let randoms = parseInt(Math.random() * num + 0)
                    console.log(randoms)
                    setTimeout(() => {
                        axios.get(Ip + '/getAudio', { params: { _id: this.props.songer.musicId[randoms] } }).then((msg) => {
                            this.props.dispatch(getNextMusic(msg.data))
                            vadio.play();bgBegin();this.progerss();setBegin();
                        })
                    }, 200)
                }
            }
        }
    }
    //上一曲
    clickUp() {
        let play = document.getElementById('play');
        let vadio = document.getElementById('vadio');
        console.log('歌曲', this.props.nextmusic)
        for (let i = 0; i < this.props.songer.musicId.length; i++) {
            switch (this.props.songer.musicId[i]) {
                case this.props.nextmusic._id: {
                    if (i - 1 == -1) {
                        play.src = './b/act.png';
                        setTimeout(() => {
                            axios.get(Ip + '/getAudio', { params: { _id: this.props.songer.musicId[this.props.songer.musicId.length - 1] } }).then((msg) => {
                                this.props.dispatch(getNextMusic(msg.data))
                                vadio.play();bgBegin();this.progerss();setBegin();
                            })
                        }, 200)
                        break;
                    } else {
                        play.src = './b/act.png';
                        setTimeout(() => {
                            axios.get(Ip + '/getAudio', { params: { _id: this.props.songer.musicId[i - 1] } }).then((msg) => {
                                this.props.dispatch(getNextMusic(msg.data))
                                vadio.play();bgBegin();this.progerss();setBegin();
                            })
                        }, 200)
                        break;
                    }
                    break;
                }
            }
        }
    }
    //随机播放
    clickRandom() {
        let random = document.getElementById('random');
        let vadio = document.getElementById('vadio')

        //随机播放
        if (random.src == this.state.ip + '/b/ad_.png') {
            random.src = this.state.ip + '/b/adv.png'
            Toast.info('随机播放', 1);
            this.state.flag = false;
            this.setState({})
            console.log(this.state.flag)
            //列表循环  
        } else if (random.src == this.state.ip + '/b/adv.png') {
            random.src = this.state.ip + '/b/ad_.png'
            Toast.info('列表循环', 1);
            this.state.flag = true;
            this.setState({})
        }
    }
}

//背景图转
function bgBegin() {
    document.getElementById('bg-div').className = 'bg-div'
}
//背景图停
function bgEnd() {
    document.getElementById('bg-div').className = ''
}
//小摇杆下来播放
function setBegin() {
    let audio_img_rotate = document.getElementById('audio_img_rotate');
    audio_img_rotate.style.transition = ".5s "
    audio_img_rotate.style.transform = "rotate(-8deg)"
}
//小摇杆上去暂停
function setEnd() {
    let audio_img_rotate = document.getElementById('audio_img_rotate');
    audio_img_rotate.style.transition = ".5s "
    audio_img_rotate.style.transform = "rotate(-23deg)"
}
function filter(state) {
    console.log(state)
    return {
        songer: state.getsong,
        nextmusic: state.getNextMusic
    }
}

export default connect(filter)(Audio);