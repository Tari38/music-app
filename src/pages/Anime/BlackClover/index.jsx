import Music from "./Music";
import {Card} from "react-bootstrap";
import blackClover from "../../../assets/black-clover1.png";
import "./index.css";


export default function BlackClover() {
    return (
        <>
        <Card>
            <Card.Title>Black Clover</Card.Title>
              <Card.Img variant="top" src={blackClover}></Card.Img>
                <Card.Body>
                    <Card.Text>
                    The story follows Asta, a young boy born without any magic power. This is unknown to the world he lives in because seemingly everyone has some sort of magic power. With his fellow mages from the Black Bulls, Asta plans to become the next Wizard King.
                    </Card.Text>
                    
                    </Card.Body>
                    <Card.Footer>
                    <Card.Link href="https://en.wikipedia.org/wiki/Black_Clover">Black Clover Wiki</Card.Link>
                    </Card.Footer>
                
        </Card>
        <Music />
        </>
    )
}