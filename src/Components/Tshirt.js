import React from 'react'
import Navbarr from './Navbar'
import { Navbar } from 'react-bootstrap'
import { Row, Container, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSavings } from "react-icons/md";
import { PiClockCountdownFill } from "react-icons/pi";
import { MdPayment } from "react-icons/md";




function Tshirt() {
    return (
        <div>
            <Navbarr />
            <div class="card bg-dark border-0">
                    <img src="./assets/images/banner-03.jpg" class="card-img" alt="background" height='600px' />
                    <div class="card-img-overlay d-flex flex-column justify-content-center text-white">
                        <h5 class="ms-5 fs-3">Lifestyle Collection</h5>
                        <h5 class="ms-5 fs-2 text-success display-3">Mens T-Shirt Collections</h5>
                        <p class="ms-5 fs-5">Get Free Shipping On Orders over $99.00</p>
                    </div>
                </div>
            <Container>
                
                <div className='py-4 bg-white mt-5'>
                    <Row>
                        <Col xs={3} >
                            <div className='my-auto border-end text-center'>
                                <TbTruckDelivery className='fs-1' />
                                <b>Fast Delivery</b>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className='my-auto border-end  text-center'>
                                <MdOutlineSavings className='fs-1' />
                                <b>Money Guarantee</b><br></br>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className='my-auto border-end text-center'>
                                <PiClockCountdownFill className='fs-1' />
                                <b>365 Days</b><br></br>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <div className='my-auto text-center'>
                                <MdPayment className='fs-1' />
                                <b>Payment</b><br></br>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row className='mt-5'>
                    <h1 className='text-center mb-5 display-4 mt-2' >Men's T-Shirts</h1>
                    <Col xs={3}><Card className='products' style={{ width: '16rem', border: 'none' }}>
                        <Card.Img variant="top" src="./assets/images/tshirt-2.jpg" style={{ width: '100%', height: '250px' }} className='p-2' />
                        <Card.Body className='text-center'>
                            <Card.Title>Oversized Tshirts</Card.Title>
                            <Card.Text>₹499
                            </Card.Text>
                            <a>
                                <Button className='bg-success px-5'>Buy Now</Button>
                            </a>
                        </Card.Body>
                    </Card></Col>
                    <Col xs={3}><Card className='products' style={{ width: '16rem', border: 'none' }}>
                        <Card.Img variant="top" src="./assets/images/tshirtbg-1.png" style={{ width: '100%', height: '250px' }} className='p-2' />
                        <Card.Body className='text-center'>
                            <Card.Title>T-shirt</Card.Title>
                            <Card.Text>₹499
                            </Card.Text>
                            <a>
                                <Button className='bg-success px-5'>Buy Now</Button>
                            </a>
                        </Card.Body>
                    </Card></Col>
                    <Col xs={3}><Card className='products' style={{ width: '16rem', border: 'none' }}>
                        <Card.Img variant="top" src="./assets/images/tshirt-3.jpg" style={{ width: '100%', height: '250px' }} className='p-2' />
                        <Card.Body className='text-center'>
                            <Card.Title>Full-Sleeve</Card.Title>
                            <Card.Text>₹499
                            </Card.Text>
                            <a>
                                <Button className='bg-success px-5'>Buy Now</Button>
                            </a>
                        </Card.Body>
                    </Card></Col>
                    <Col xs={3}><Card className='products' style={{ width: '16rem', border: 'none' }}>
                        <Card.Img variant="top" src="./assets/images/tshirt-4.jpg" style={{ width: '100%', height: '250px' }} className='p-2' />
                        <Card.Body className='text-center'>
                            <Card.Title>Polo-Tshirt</Card.Title>
                            <Card.Text>₹499
                            </Card.Text>
                            <a>
                                <Button className='bg-success px-5'>Buy Now</Button>
                            </a>
                        </Card.Body>
                    </Card></Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Tshirt