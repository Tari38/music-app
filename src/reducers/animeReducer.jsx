const initState = {
    anime: [],
    loading: false
  }
  
  const animeReducer = (state=initState, action) => {
  switch(action.type) {
    case 'LOAD_ANIME':
      return ({
        ...state,
        anime: action.payload,
        error: false
      })
    case 'TOGGLE_LIKE_ANIME':
      const animeToLike = state.anime.find(a => a.id === action.payload)
      const likeIdx = state.anime.indexOf(animeToLike)
      const updatedAnimeLike = [
        ...state.anime.slice(0, likeIdx),
        { ...animeToLike, liked: !animeToLike.liked },
        ...state.anime.slice(likeIdx+1)
      ]
      return { ...state, anime: updatedAnimeLike }
    case 'DELETE_ANIME':
      const updatedAnime = state.anime.filter(a => a.id !== action.payload)
      return { ...state, anime: updatedAnime }
    case 'SET_ERROR':
        return { ...state, error: action.payload }
    default:
        return state;  
  }
  }
  
  export default animeReducer;