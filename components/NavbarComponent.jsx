import React, {useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/NavBar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from "next/image";
import LogoBinar from "./images/Binar.png"
//css import



export default function NavbarComponent() {

    const router = useRouter();
    const currentRoute = router.pathname;

    return(
        <div className="fixed-top">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                <Navbar.Brand>
                    <Image
                    alt="Binar Academy"
                    src={LogoBinar.src}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    </Navbar.Brand>
                    <div className="d-flex justify-content-around">
                        <Navbar.Brand>Binar Game Library</Navbar.Brand>
                    </div>
                    <Navbar.Collapse className='d-flex justify-content-end'>
                            <Nav.Link className="d-flex align-items-center me-2 text-white">      
                            <Link href='/Home' className={currentRoute === '/Home' ? styles.active : styles.nonActive}>
                                Home
                            </Link></Nav.Link>
                            <Nav.Link className="d-flex align-items-center text-white me-2">     
                            <Link
                                href='/Profile'
                                className={currentRoute === '/Profile' ? styles.active : styles.nonActive}>
                                Profile
                            </Link></Nav.Link>
                            <Nav.Link className="d-flex align-items-center text-white">     
                            <Link
                                href='/'
                                className={currentRoute === '/' ? styles.active : styles.nonActive}>
                                Logout
                            </Link></Nav.Link>              
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}