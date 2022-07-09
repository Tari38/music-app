const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://animi.p.rapidapi.com/name',
  params: {name: 'anime'},
  headers: {
    'X-RapidAPI-Key': '7d315f640fmshb606ccb34056af4p1f4e89jsn7f0210fb4fbc',
    'X-RapidAPI-Host': 'animi.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});




{/* <Card className="card"> */}
                    {/* <Card.Img className="card-img" variant="top" src={jujutsuKaisen} alt="jujutsu kaisen art"></Card.Img>
                    <Card.Body className="card-body">
                        <Card.Title className="card-title">Jujutsu Kaisen</Card.Title>
                        <Card.Text>
                        Although Yuji Itadori looks like your average teenager, his immense physical strength is something to behold! Every sports club wants him to join, but Itadori would rather hang out with the school outcasts in the Occult Research Club. One day, the club manages to get their hands on a sealed cursed object. Little do they know the terror they’ll unleash when they break the seal…
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small></small>
                    </Card.Footer>
                </Card>
                <Card className="card">
                    <Card.Img className="card-img" variant="top" src={blackClover} alt="black clover art"></Card.Img>
                    <Card.Body>
                        <Card.Title>Black Clover</Card.Title>
                        <Card.Text>
                        The story follows Asta, a young boy born without any magic power. This is unknown to the world he lives in because seemingly everyone has some sort of magic power. With his fellow mages from the Black Bulls, Asta plans to become the next Wizard King.
                        </Card.Text>
                    </Card.Body>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Albums</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    <li><a href="../Forms/SongList">Music Collection Vol. 1</a></li>
                                    <LikeButton liked={liked} handleClick={() => handleToggleLikeAlbum(id)}/>
                                    <DeleteButton handleClick={() => handleDeleteAlbum(id)}/>
                                    <SongList />
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Card.Footer>
                        <small><a href="https://blackclover.fandom.com/wiki/Black_Clover_Wiki">Black Clover Wiki</a></small>
                    </Card.Footer>
                </Card>

                <Card className="card">
                    <Card.Img className="card-img" variant="top" src={Bleach} alt="bleach art"></Card.Img>
                    <Card.Body>
                        <Card.Title>Bleach</Card.Title>
                        <Card.Text>
                        In Karakura Town, a 15-year-old high school student Ichigo Kurosaki becomes a substitute Soul Reaper (死神, Shinigami, literally, "Death God") when Rukia Kuchiki, a Soul Reaper, cannot fulfill her duties after engaging in battle with a particularly powerful Hollow. Although initially reluctant to accept the heavy responsibility, he begins eliminating Hollows in Rukia's place and during this time discovers that several of his friends and classmates are spiritually aware and have powers of their own
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small></small>
                    </Card.Footer>
                </Card> */}