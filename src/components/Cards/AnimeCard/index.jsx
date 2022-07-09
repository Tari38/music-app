import { useDispatch } from 'react-redux';
import { toggleLike, deleteAnime} from '../../../actions/AnimeActions';
import { LikeButton, DeleteButton } from '../..';

import "../Card.css";

const AnimeCard = ({ anime }) => {
    const { id, img, title, summary, liked } = anime;
    const dispatch = useDispatch();
    const handleToggleLike = id => dispatch(toggleLike(id));
    const handleDelete = id => dispatch(deleteAnime(id))
    
    return (
        <div className="card">
            <img src={img} />
            <h1>{title}</h1>
            <p>{summary}</p>
            <LikeButton liked={liked} handleClick={() => handleToggleLike(id)}/>
            <DeleteButton handleClick={() => handleDelete(id)}/>
        </div>

    );
}

export default AnimeCard;