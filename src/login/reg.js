import React, { Component } from 'react';
import axios from 'axios'
import { Button, InputItem, WhiteSpace } from 'antd-mobile';
import { Ip } from '../ip.js'
import {
    Link
} from 'react-router-dom';
class Reg extends Component {

    render() {
        return (
            <div style={{ paddingTop: '1rem', height: '100%', }}>
                <div>
                    <InputItem type='phone' placeholder="输入手机号" ref='phone'>
                        <div style={{
                            backgroundImage: 'url(../b/a3_.png)',
                            width: '2.2rem', height: '2.2rem', backgroundSize: 'cover', display: 'inline-block', verticalAlign: 'bottom', height: '2.2rem', width: '2.2rem'
                        }} />
                        <div style={{ display: 'inline-block', paddingLeft: '5px' }}>+86</div></InputItem>
                    <InputItem type='password' placeholder="设置登录密码，不少于6位" ref='pwd'>
                        <div style={{
                            backgroundImage: 'url(../b/a76.png)',
                            width: '2.2rem', height: '2.2rem', backgroundSize: 'cover', display: 'inline-block', height: '2.2rem', width: '2.2rem'
                        }} />
                    </InputItem>
                    <div style={{ marginTop: '1.5rem', }}>
                        <Button type="warning" style={{ width: '90%', margin: '0 auto', borderRadius: '5rem' }}
                            onClick={this.clickReg.bind(this)}
                        >下一步</Button><WhiteSpace />
                    </div>

                    <Link to='/login'><div style={{ textDecoration: "underline", color: 'gray', paddingTop: '1.5rem', paddingBottom: '1rem' }}>前往登录</div></Link>


                </div>

                <div className='reg-display'>
                    <div>
                        其他注册方式
                    </div>

                    <div className='reg-outer'>
                        <figcaption>
                            <img src='../b/a7d.png' style={{ width: '5rem', height: '5rem' }} alt='' />
                            <div>网易邮箱</div>
                        </figcaption>
                        <figcaption>
                            <img src='../b/a7g.png' style={{ width: '5rem', height: '5rem' }} alt='' />
                            <div>QQ</div>
                        </figcaption>
                        <figcaption>
                            <img src='../b/a7i.png' style={{ width: '5rem', height: '5rem' }} alt='' />
                            <div>微博</div>
                        </figcaption>
                        <figcaption>
                            <img src='../b/a7k.png' style={{ width: '5rem', height: '5rem' }} alt='' />
                            <div>微信</div>
                        </figcaption>
                    </div>
                </div>
            </div>
        )
    }

    clickReg() {
        if (this.refs.phone.state.value !== '' && this.refs.pwd.state.value !== '') {
            let parem = {
                phone: this.refs.phone.state.value,
                pwd: this.refs.pwd.state.value
            }
            axios.get(Ip + '/reg', { params: parem }).then((data) => {
                this.props.history.push('/login')
            })
        }
    }

}

export default Reg;