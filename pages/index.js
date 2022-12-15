import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export default function Home() {
  return (
    <div>
      <div className="position-absolute top-50 start-50 translate-middle">
        <Card style={{ width: '50rem', height: '50rem' }}>
          <img src={require("../components/images/namaste.jpeg")} alt="welcome image"/>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link className="d-flex flex-row" href="/Login">Signup</Card.Link>
            <Card.Link className="d-flex flex-row-reverse" href="/Signup">Login</Card.Link>
          </Card.Body>
        </Card> 
      </div>


    </div>
  )
}