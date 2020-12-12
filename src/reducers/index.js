import { combineReducers } from 'redux'
const songsReducer = () => {
  return [
    {
      title:"Senorita",
      duration:"3:05"
    },
    {
      title:"RACE",
      duration:"2:05"
    },
    {
      title:"Moonlight",
      duration:"1:05"
    },
    {
      title:"Blinding Lights",
      duration:"3:00"
    },
    {
      title:"Marshmellow",
      duration:"2:40"
    }
  ]
} 

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED'){
    return action.payload;
  }
  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong:selectedSongReducer
});