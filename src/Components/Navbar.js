import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import logo from "../images/logo.svg";


function Navbarr() {
    return (
        <div>
            <Navbar expand="lg" className="bg-light">
                <Container>
                    <Link to={'/'}>
                        <Navbar.Brand href="/home" className='fw-bold fs-2'>
                            <img src={logo}></img>
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#">Pages</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                        {/* <Nav.Link href="/signup" className='me-3'>
                            <FaRegCircleUser className='fs-3 me-2' />Sign up
                        </Nav.Link> */}
                        <Nav.Link href="/login">
                            <FaRegCircleUser className='fs-3 me-2' />Log in
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbarr