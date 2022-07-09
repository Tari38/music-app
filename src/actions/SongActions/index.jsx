import axios from 'axios';
import { MusicData } from '../../components/Data';

let data = MusicData;

export const toggleLike = songId => ({ type: 'TOGGLE_LIKE_SONG', payload: songId })

export const deleteSong = songId => ({ type: 'DELETE_SONG', payload: songId })

export const fetchSongs = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('../../components/Data')
            let newSongsArray = data.message.map((data, i) => ({ id: i + 1, title: data, artist: data, liked: false }))
            dispatch({
                type: 'LOAD_SONGS',
                payload: newSongsArray
            })
        } catch (err) {
            dispatch({
                type: 'SET_ERROR',
                payload: err
            })
        }
    }
}