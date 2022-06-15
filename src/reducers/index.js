import { combineReducers } from 'redux'
//노래 목록을 알려주는 reducer 생성

const songsReducer = () =>{
  return [
    {title : '소주한잔', duration : '4:51'},
    {title : '포미닛', duration : '4:00'},
    {title : '롤리팝', duration : '4:22'},
    {title : '너말고 너 언니', duration : '4:31'},

  ]
}


//선택된 노래를 알려주는 reducer

const selectedSongReducer = ( selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED'){
    return action.payload
  }
  return selectedSong
}

export default combineReducers({
  songs : songsReducer,
  selectedSong: selectedSongReducer
})