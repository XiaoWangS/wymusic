//数据仓库


import { createStore } from 'redux';

//引入reducer计算者
import reducers from './reducer.js'
    
//创建仓库     
//里面的函数就是reducer(计算者)  每次收到action改变状态的时候，都会调用reducer
export default createStore(reducers)
