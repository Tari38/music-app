import { CardGroup, Container } from "react-bootstrap";
import heart from "../../assets/heart.png";
import AnimeCard from "../../components/Cards/AnimeCard";
import "./Home.css";

export default function Home() {
    return (
        <>
            <Container className="home-main">
                <div className="home-title">
                    <h1>I <span><img className="heart-img" src={heart} alt="beating heart"></img></span> anime</h1>
                    <h2>Most anime's have Opening and Ending Theme Songs. </h2>
                    <h2>My favourites are shown below, enjoy!</h2>
                </div>
            </Container>
            <Container>
                <CardGroup>
                    <AnimeCard />
                </CardGroup>
            </Container>
        </>
    )
}