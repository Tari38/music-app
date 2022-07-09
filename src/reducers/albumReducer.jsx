const initState = {
  albums: [],
  loading: false
}

const albumReducer = (state=initState, action) => {
switch(action.type) {
  case 'LOAD_ALBUMS':
    return ({
      ...state,
      albums: action.payload,
      error: false
    })
  case 'TOGGLE_LIKE_ALBUM':
    const albumToLike = state.albums.find(s => s.id === action.payload)
    const likeIdx = state.albums.indexOf(albumToLike)
    const updatedAlbumsLike = [
      ...state.albums.slice(0, likeIdx),
      { ...albumToLike, liked: !albumToLike.liked },
      ...state.albums.slice(likeIdx+1)
    ]
    return { ...state, albums: updatedAlbumsLike }
  case 'DELETE_ALBUM':
    const updatedAlbums = state.albums.filter(s => s.id !== action.payload)
    return { ...state, albums: updatedAlbums }
  case 'SET_ERROR':
      return { ...state, error: action.payload }
  default:
      return state;  
}
}

export default albumReducer;