import React, {useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';



export default function NavbarComponent() {

    return(
        <div className="fixed-top">
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <div className="d-flex justify-content-around">
                        <Navbar.Brand>Binar Game Library</Navbar.Brand>
                    </div>
                <Nav>
                    <Navbar.Collapse className='d-flex justify-content-end'>
                        <Nav.Link className="d-flex align-items-center me-2 text-white"href="/Home">Home</Nav.Link>
                        <Nav.Link className="d-flex align-items-center text-white"href="/Profile">Profile</Nav.Link>
                        <Nav.Link className="text-white" href="/Register">Register</Nav.Link>
                        <Nav.Link className="text-white" href="/Login">Login</Nav.Link>
                        <Nav.Link className="d-flex ms-3 text-white" href="/Logout">Logout</Nav.Link>
                    </Navbar.Collapse>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}