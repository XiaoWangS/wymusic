import React, { Component } from 'react';
import {
    Link, HashRouter as Router, Route
} from 'react-router-dom';
import Index from './zhuye.js'
import User from './user.js'
import MyMusic from './mymusic.js'

class Main extends Component {



    render() {
        return (
            <div >
                <div>
                    <div>
                        <Router>
                            <div>
                                <Route path='/main/index' component={Index} />
                                <Route path='/main/user' component={User} />
                                <Route path='/main/mymusic' component={MyMusic} />
                            </div>
                        </Router>
                    </div>
                    <div style={{marginTop:"4rem",}}>

                        <div className='main-bottom' style={{  display: 'flex', justifyContent: "space-around", padding: '.1rem 0rem', margin: '0' }}>
                            <Link to='/main/index'><figcaption>
                                <img src='./b/t_actionbar_discover_selected.png' style={{ width: '3rem' }} alt='' />
                                <div style={{ color: 'white' }}>发现音乐</div>
                            </figcaption></Link>
                            <Link to='/main/mymusic'><figcaption>
                                <img src='./b/t_actionbar_music_selected.png' style={{ width: '3rem' }} alt='' />
                                <div style={{ color: 'white' }}>我的音乐</div>
                            </figcaption></Link>
                            <figcaption>
                                <img src='./b/t_actionbar_friends_selected.png' style={{ width: '3rem' }} alt='' /> 
                                <div style={{ color: 'white' }}>朋友</div>
                            </figcaption>
                            <Link to='/main/user'><figcaption>
                                <img src='./b/t_actionbar_friends_selected.png' style={{ width: '3rem' }} alt='' />
                                <div style={{ color: 'white' }}>账号</div>
                            </figcaption></Link>
                        </div>
                        {/* <div style={{ height: "4rem" }}></div> */}
                    </div>
                </div>

            </div>
        )
    }


}

export default Main;