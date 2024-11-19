import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BiLogoPlayStore } from "react-icons/bi";
import logo from "../images/logo.svg";

function Footer() {
    return (
        <div className='bg-secondary p-2 mt-5'>
            <Container>
                <Row className='text-center mt-5 text-white'>
                    <Col xs={{ order: 'first' }}>
                        <img src={logo}></img>
                        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
                        <a href='' className='d-flex text-decoration-none text-white'>
                                <p className='border px-3'>Get It On <br></br>
                                    <b>Google Play</b></p>
                            <p className='px-3 border ms-3' >Get It On <br></br>
                                <b>App Store</b></p>
                        </a>
                    </Col>
                    <Col xs>
                        <h4 className='text-dark'>About Us</h4>
                        <a href='' className='text-decoration-none text-white'>
                            <p>Careers</p>
                            <p>Our Stores</p>
                            <p>Our Cares</p>
                            <p>Terms&Conditions</p>
                            <p>Privacy&Policy</p>
                        </a>
                    </Col>
                    <Col xs>
                        <h4 className='text-dark'>Customer Care</h4>
                        <a href='' className='text-decoration-none text-white'>
                            <p>Help Center</p>
                            <p>How to Buy</p>
                            <p>Track your order</p>
                            <p>Corporate&bulk purchasing</p>
                            <p>Returns&Refunds</p>
                        </a>
                    </Col>
                    <Col xs>
                        <h4 className='text-dark'>Contact Us</h4>
                        <a href='' className='text-decoration-none text-white'>
                            <p>70 Washington Square South, New York, NY 10012, United States</p>
                            <p>Email: uilib.help@gmail.com</p>
                            <p>Phone: +1 1123 456 780</p>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer