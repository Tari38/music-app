import { useDispatch } from 'react-redux';
import { toggleLike, deleteSong} from '../../../actions/SongActions';
import { LikeButton, DeleteButton } from '../..';

import "../Card.css";

const SongCard = ({ song }) => {
    const { id, title, artist, liked } = song;
    const dispatch = useDispatch();
    const handleToggleLike = id => dispatch(toggleLike(id));

    const handleDelete = id => dispatch(deleteSong(id))
    
    return (
        <div className="card">
            <img src={img} />
            <h1>{title}</h1>
            <h2>{artist}</h2>
            <LikeButton liked={liked} handleClick={() => handleToggleLike(id)}/>
            <DeleteButton handleClick={() => handleDelete(id)}/>
        </div>

    );
}

export default SongCard;