//通知

//整个歌单
export function getSong (val){
    return{
        type:'GETSONG',
        val
    }
}
//歌曲
export function getNextMusic (val){
    return{
        type:'GETNEXTMUSIC',
        val
    }
}

//历史记录歌单（新）
export function getNewSong(val){
    return{
        type:'GETNEWSONG',
        val
    }
}

//获取历史歌曲（新）
export function getNewMusic(val){
    return{
        type:'GETNEWMUSIC',
        val
    }
}
