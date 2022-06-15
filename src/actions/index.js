//action creator

export const selectSong = song => {
  // return 은 action

  return {
    type : 'SONG_SELECTED',
    payload : song,
  }
}