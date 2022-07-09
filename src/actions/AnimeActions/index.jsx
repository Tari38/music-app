import axios from 'axios';
import { AnimeData } from '../../components/Data';

export const toggleLike = animeId => ({ type: 'TOGGLE_LIKE_ANIME', payload: animeId })

export const deleteAnime = animeId => ({ type: 'DELETE_ANIME', payload: animeId })

export const fetchAnime = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get({AnimeData})
            let newAnimeArray = data.message.map((data, i) => ({ id: i + 1, img: data, title: data, summary: data, liked: false }))
            dispatch({
                type: 'LOAD_ANIME',
                payload: newAnimeArray
            })
        } catch (err) {
            dispatch({
                type: 'SET_ERROR',
                payload: err
            })
        }
    }
}