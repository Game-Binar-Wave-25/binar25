import { NavbarComponent } from "../components";
import { GameData } from "../components/GameData";
import { OtherGame } from "../components/OtherGame";
import { Carousel } from 'react-responsive-carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home(){
    // map((element) => { /* … */ })
    // console.log(GameData, '->game');
    let text =  "abcdefgasdfasdf";
    let convert = text.slice(0, 5) + (text.length > 5 ? "..." : "");
    console.log(text);
    console.log(convert);

    return(
        <>
            <NavbarComponent></NavbarComponent>

        <div className="container w-50 justify-content-center mt-5">
            <h1 className="text-center">Refreshing Game</h1>
              <Carousel>
                  <div>
                      <img 
                      src="https://image.winudf.com/v2/image1/Y29tLmxzLnJvY2sucGFwZXIuc2Npc3NvcnMuY2hhbGxlbmdlX3NjcmVlbl80XzE1NTQyMzk1NDRfMDcz/screen-3.jpg?fakeurl=1" alt="image1"
                    //   style={{height: "200px", height:"400px"}}
                      />
  
                  </div>
                  <div>
                      <img src="https://img.freepik.com/premium-vector/hands-playing-rock-paper-scissors-game-flat-design-style-vector-illustration_540284-598.jpg?w=2000" alt="image3"
                    //   style={{height: "200px", height:"400px"}}
                      />
  
                  </div>
                  <div>
                      <img src="https://miro.medium.com/max/1400/1*8du96SQUQ0NlWmWvVu20Zw.webp" alt="image4" 
                    //   style={{height: "200px", height:"400px"}}
                      />
                  </div>
                  
              </Carousel>
              <Button href="/GameSuit" variant="dark" className="d-flex justify-content-center">Play Now!</Button>
            </div>


            <div className="container d-flex mt-5">
            {
                GameData.map((el, idx) => (
                    <div key={idx}>
                        <Card className="justify-content me-3" style={{ width: '18rem' }}>
                        <Card.Img style={{height: "166px"}} src={el.linkImg} />
                        <Card.Body>
                            <Card.Title className='text-black'>{el.title}</Card.Title>
                            <Card.Text className='text-black'>
                            {el.category}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </div>
                ))
            }
            </div>

            <div className="container d-flex mt-5">
            {
                OtherGame.map((el, idx) => (
                    <div key={idx}>
                        <Card className="justify-content me-3" style={{ width: '18rem' }}>
                        <Card.Img style={{height: "166px"}} src={el.linkImg} />
                        <Card.Body>
                            <Card.Title className='text-black'>{el.title}</Card.Title>
                            <Card.Text className='text-black'>
                            {el.category}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </div>
                ))
            }
            </div>




        </>
    )
}