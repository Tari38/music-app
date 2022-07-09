const initState = {
    songs: [],
    loading: false
  }

const songReducer = (state=initState, action) => {
  switch(action.type) {
    case 'LOAD_SONGS':
      return ({
        ...state,
        songs: action.payload,
        error: false
      })
    case 'TOGGLE_LIKE_SONG':
      const songToLike = state.songs.find(s => s.id === action.payload)
      const likeIdx = state.songs.indexOf(songToLike)
      const updatedSongsLike = [
        ...state.songs.slice(0, likeIdx),
        { ...songToLike, liked: !songToLike.liked },
        ...state.songs.slice(likeIdx+1)
      ]
      return { ...state, songs: updatedSongsLike }
    case 'DELETE_SONG':
      const updatedSongs = state.songs.filter(s => s.id !== action.payload)
      return { ...state, songs: updatedSongs }
    case 'SET_ERROR':
        return { ...state, error: action.payload }
    default:
        return state;  
  }
}

export default songReducer;