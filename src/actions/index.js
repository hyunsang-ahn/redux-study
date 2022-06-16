//action creator

export const selectSong = song => {
  // return 은 action

  return {
    type: 'SONG_SELECTED',
    payload: song,
  }
}

export const getRankingList = (list) => {
  // return 은 action

  return {
    type: 'GET_RANKING_LIST',
    payload : list
  }
}


export const selectTeam = (team) => {
  // return 은 action

  return {
    type: 'SELECT_TEAM',
    payload : team
  }
}