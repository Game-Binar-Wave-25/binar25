import React, {useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';



export default function NavbarComponent() {

    return(
        <div className="fixed-top">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                <Navbar.Brand>
                    <img
                    alt="Binar Academy"
                    src="https://play-lh.googleusercontent.com/_5KoeljZI1DlzpSpSltfdAFJKghgl0E1iUB9h9l-q2TIGsZlQY1TU6JlPR_2uCs8iQ=s96-rw"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    </Navbar.Brand>
                    <div className="d-flex justify-content-around">
                        <Navbar.Brand>Binar Game Library</Navbar.Brand>
                    </div>
                    <Navbar.Collapse className='d-flex justify-content-end' id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link className="d-flex align-items-center me-2 text-white"href="/Home">Home</Nav.Link>
                            <Nav.Link className="d-flex align-items-center text-white"href="/Profile">Profile</Nav.Link>
                            <Nav.Link className="d-flex ms-3 text-white" href="/Logout">Logout</Nav.Link>                
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}