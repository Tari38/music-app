import React from "react";
import { useSelector } from "react-redux";
import { AnimeCard } from '../../components';

const Faves = () => {

    const albumList = useSelector(state => state.albums.faves);
    const songList = useSelector(state => state.songs.faves)

    return <>
            <h1>Faves!</h1>
            <div className="album-container">
                { albumList.length == 0 ? <em>No albums faved...</em> : albumList.map(a => <AnimeCard key={a.id} data={a}/>)}
            </div>
            <div className="song-container">
                { songList.length == 0 ? <em>No songs faved...</em> : songList.map(s => <AnimeCard key={s.id} data={s}/>)}
            </div>
           </>
}

export default Faves;