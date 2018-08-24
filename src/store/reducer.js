//renducer 计算者
import {  combineReducers } from 'redux';



//获取歌单
function getsong (state=[],action){
    switch (action.type) {
        case 'GETSONG': return action.val;
        case 'GETNEWSONG': return action.val;
        default: return state;
    }
}
//获取歌曲
function getNextMusic (state=[],action){
    switch (action.type) {
        case 'GETNEXTMUSIC': return action.val;
        case 'GETNEWMUSIC': return action.val;
        default: return state;
    }
}

//合并成一个大的
export default combineReducers({
    getsong,
    getNextMusic
})