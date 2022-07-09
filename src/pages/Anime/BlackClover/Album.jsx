import album1 from "./Music_Collection_1.webp";
import Songs from "./SongList";
import "./Album.css";

function Album() {
    return (
        <>
            <h2>Music Collection Vol 1</h2>
            <img src={album1} alt="Art of Black Clover anime"></img>
            <ul>{Songs}</ul>
        </>
    )
}

export default Album;