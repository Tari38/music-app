import axios from 'axios';
import { MusicData } from '../../components/Data';

let data = MusicData;

export const toggleLike = albumId => ({ type: 'TOGGLE_LIKE_ALBUM', payload: albumId })

export const deleteAlbum = albumId => ({ type: 'DELETE_ALBUM', payload: albumId })

export const fetchAlbums = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('../../components/Data')
            let newAlbumsArray = data.message.map((data, i) => ({ id: i + 1, img: data, title: data, songs: [], liked: false }))
            dispatch({
                type: 'LOAD_ALBUMS',
                payload: newAlbumsArray
            })
        } catch (err) {
            dispatch({
                type: 'SET_ERROR',
                payload: err
            })
        }
    }
}