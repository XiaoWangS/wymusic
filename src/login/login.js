import React, { Component } from 'react';
import axios from 'axios'
import { Button, InputItem, WhiteSpace } from 'antd-mobile';
import { Ip } from '../ip.js'
import {
    Link
} from 'react-router-dom';
class Login extends Component {

    render() {
        return (
            <div style={{ paddingTop: '1rem' }}>
                <InputItem type='phone' placeholder="手机号" ref='phone'>
                    <div style={{
                        backgroundImage: 'url(../b/a3_.png)',
                        width: '2.2rem', height: '2.2rem', backgroundSize: 'cover', display: 'inline-block', verticalAlign: 'bottom', height: '2.2rem', width: '2.2rem'
                    }} />
                </InputItem>
                <InputItem type='password' placeholder="密码" ref='pwd'>
                    <div style={{
                        backgroundImage: 'url(../b/a76.png)',
                        width: '2.2rem', height: '2.2rem', backgroundSize: 'cover', display: 'inline-block', height: '2.2rem', width: '2.2rem'
                    }} />
                </InputItem>
                <div style={{ marginTop: '1.5rem', }}>
                    <Button type="warning" style={{ width: '90%', margin: '0 auto', borderRadius: '5rem' }} onClick={this.clickLogin.bind(this)}>登录</Button><WhiteSpace />
                </div>
                <div style={{display:'flex',justifyContent:'space-around'}}>
                    <div style={{ textDecoration: "underline", color: 'gray', paddingTop: '1.5rem', paddingBottom: '1rem' }}>重设密码</div>
                    <Link to='/reg'><div style={{ textDecoration: "underline", color: 'gray', paddingTop: '1.5rem', paddingBottom: '1rem' }}>前往注册</div></Link>
                </div>
            </div>

        )
    }

    clickLogin() {
        let parem = {
            phone: this.refs.phone.state.value,
            pwd: this.refs.pwd.state.value
        }
        axios.get(Ip + '/login', { params: parem }).then((data) => {
            if (data.data.length > 0) {
                this.props.history.push('/main/index')
            }
        })
    }

}

export default Login;