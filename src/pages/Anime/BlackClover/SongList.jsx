import { useDispatch } from 'react-redux';
import { ButtonControl } from '../../../components';

function SongList({ song }) {
    const { id, liked } = song
    const dispatch = useDispatch()

    

    let Songs = [
    {
        id: 1,
        type: "OP V1",
        track: "Haruka Mirai",
        artist: "Kankaku Piero",
        url: "https://www.youtube.com/watch?v=uWPbjtsQjGc&list=PLDPZ87_y_1I6rTTWT158dpQYvKLU1niax&index=1"
    },
    {
        id: 2,
        type: "OP V2",
        track: "PAiNT it BLACK",
        artist: "BiSH",
        url: "https://www.youtube.com/watch?v=LzqQtXPzLVU&list=PLDPZ87_y_1I6rTTWT158dpQYvKLU1niax&index=3"
    },
    {
        id: 3,
        type: "EN V2",
        track: "Amazing Dreams",
        artist: "SWANKY DANK",
        url: "https://www.youtube.com/watch?v=4ciNU-1WS54&list=PLDPZ87_y_1I6rTTWT158dpQYvKLU1niax&index=4"
    },
    {
        id: 4,
        type: "OP V3",
        track: "Black Rover",
        artist: "Vickeblanka",
        url: "https://www.youtube.com/watch?v=Y27hMeRCYzA&list=PLDPZ87_y_1I6rTTWT158dpQYvKLU1niax&index=5"
    },
    {
        id: 5,
        type: "OP V4",
        track: "Guess Who is Back",
        artist: "Kumi Koda",
        url: "https://www.youtube.com/watch?v=q-5JeRvotPE&list=PLDPZ87_y_1I6rTTWT158dpQYvKLU1niax&index=7"
    },
    {
        id: 6,
        type: "OP V5",
        track: "Gamushara",
        artist: "Miyuna",
        url: "https://www.youtube.com/watch?v=cYxPLDZ97-c&list=PLDPZ87_y_1I6rTTWT158dpQYvKLU1niax&index=9"
    },
    {
        id: 7,
        type: "EN V5",
        track: "Tenjou Tenge",
        artist: "Miyuna",
        url: "https://www.youtube.com/watch?v=aWsVjyy5x20&list=PLDPZ87_y_1I6rTTWT158dpQYvKLU1niax&index=10"
    },
    {
        id: 8,
        type: "OP V6",
        track: "Rakugaki Page",
        artist: "Kankaku Piero",
        url: "https://www.youtube.com/watch?v=UCnPchL08SA&list=PLDPZ87_y_1I6rTTWT158dpQYvKLU1niax&index=11"
    },
    {
        id: 9,
        type: "OP V7",
        track: "JUSTadICE",
        artist: "Seiko Oomori",
        url: "https://www.youtube.com/watch?v=wXGQK3rdhyg&list=PLDPZ87_y_1I6rTTWT158dpQYvKLU1niax&index=13"
    },
    {
        id: 10,
        type: "EN V7",
        track: "Hana ga Saku Michi",
        artist: "THE CHARM PARK",
        url: "https://www.youtube.com/watch?v=7SnFBGC7Jf8&list=PLDPZ87_y_1I6rTTWT158dpQYvKLU1niax&index=14"
    },
    {
        id: 11,
        type: "EN V8",
        track: "Against all Gods",
        artist: "m-flo",
        url: "https://www.youtube.com/watch?v=LW60pGWJHnE&list=PLDPZ87_y_1I6rTTWT158dpQYvKLU1niax&index=16"
    },
    {
        id: 12,
        type: "OP V9",
        track: "RIGHT NOW",
        artist: "EMPIRE",
        url: "https://www.youtube.com/watch?v=IXYAwR0PvZA&list=PLDPZ87_y_1I6rTTWT158dpQYvKLU1niax&index=17"
    },
    {
        id: 13,
        type: "OP V10",
        track: "Black Catcher",
        artist: "Vickeblanka",
        url: "https://www.youtube.com/watch?v=5C8yvJUVB-0&list=PLDPZ87_y_1I6rTTWT158dpQYvKLU1niax&index=19"
    },
    {
        id: 14,
        type: "EN V10",
        track: "New Page",
        artist: "INTERSECTION",
        url: "https://www.youtube.com/watch?v=HIWRy9ib3RM&list=PLDPZ87_y_1I6rTTWT158dpQYvKLU1niax&index=20"
    },
    {   
        id: 15,
        type: "OP V11",
        track: "Stories",
        artist: "Snow Man",
        url: "https://www.youtube.com/watch?v=uafcegD4Ajc&list=PLDPZ87_y_1I6rTTWT158dpQYvKLU1niax&index=21"
    },
    {
        id: 16,
        type: "OP V12",
        track: "Everlasting Shine",
        artist: "TOMORROW X TOGETHER",
        url: "https://www.youtube.com/watch?v=gLLWN_tMjeM&list=PLDPZ87_y_1I6rTTWT158dpQYvKLU1niax&index=23"
    },
    {
        id: 17,
        type: "EN V12",
        track: "A Walk",
        artist: "Gakuto Kajiwara",
        url: "https://www.youtube.com/watch?v=5XYxoKZoq4g&list=PLDPZ87_y_1I6rTTWT158dpQYvKLU1niax&index=24"
    },
    {
        id: 18,
        type: "OP V13",
        track: "Grandeur",
        artist: "ROMIX",
        url: "https://www.youtube.com/watch?v=RSsN5VDlNk8"
    },
    {
        id: 19,
        type: "EN V13",
        track: "BEAUTIFUL",
        artist: "TREASURE",
        url: "https://www.youtube.com/watch?v=MLkghoF4FIA&list=PLDPZ87_y_1I6rTTWT158dpQYvKLU1niax&index=25"
    }
    ]
    return (
        <>
            <ButtonControl />
        </>
    )
    }

export default SongList;