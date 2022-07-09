import { useDispatch } from 'react-redux';
import { toggleLike, deleteAlbum} from '../../../actions/AlbumActions';
import { LikeButton, DeleteButton } from '../..';
import { Accordion } from 'reactstrap';

import "../Card.css";

const AlbumCard = ({ album }) => {
    const { id, title, img, songs, liked } = album;
    const dispatch = useDispatch();
    const handleToggleLike = id => dispatch(toggleLike(id));

    const handleDelete = id => dispatch(deleteAlbum(id))
    
    return (
        <div className="card">
            <img src={img} />
            <h1>{title}</h1>
            <Accordion>{songs}</Accordion>
            <LikeButton liked={liked} handleClick={() => handleToggleLike(id)}/>
            <DeleteButton handleClick={() => handleDelete(id)}/>
        </div>

    );
}

export default AlbumCard;