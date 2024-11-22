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




function Shirts() {
  return (
    <div>
      <Navbarr />
        <div class="card bg-dark border-0">
          <img src="./assets/images/banner-02.jpg" class="card-img" alt="background" height='600px' />
          <div class="card-img-overlay d-flex flex-column justify-content-center text-white">
            <h5 class="ms-5 fs-4 display-3">Lifestyle Collection</h5>
            <h5 class="ms-5 fs-1 fw-bold text-danger">Shirts For Men</h5>
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
          <hr></hr>
          <h1 className='text-center mb-5 display-4 mt-2' >Men's Shirts</h1>
          <Col xs={3}>
            <Card className='products' style={{ width: '16rem', border: 'none' }}>
              <Card.Img variant="top" src="./assets/images/denimbg-1.png" style={{ width: '100%', height: '250px' }} className='p-2' />
              <Card.Body className='text-center'>
                <Card.Title>Denim Shirt</Card.Title>
                <Card.Text>₹499
                </Card.Text>
                <a>
                  <Button className='bg-success px-5'>Buy Now</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={3}><Card className='products' style={{ width: '16rem', border: 'none' }}>
            <Card.Img variant="top" src="./assets/images/casualbg-1.png" style={{ width: '100%', height: '250px' }} className='p-2' />
            <Card.Body className='text-center'>
              <Card.Title>Casual Shirt</Card.Title>
              <Card.Text>₹499
              </Card.Text>
              <a>
                <Button className='bg-success px-5'>Buy Now</Button>
              </a>
            </Card.Body>
          </Card></Col>
          <Col xs={3}><Card className='products' style={{ width: '16rem', border: 'none' }}>
            <Card.Img variant="top" src="./assets/images/checked-1.png" style={{ width: '100%', height: '250px' }} className='p-2' />
            <Card.Body className='text-center'>
              <Card.Title>checked Shirt</Card.Title>
              <Card.Text>₹499
              </Card.Text>
              <a>
                <Button className='bg-success px-5'>Buy Now</Button>
              </a>
            </Card.Body>
          </Card></Col>
          <Col xs={3}><Card className='products' style={{ width: '16rem', border: 'none' }}>
            <Card.Img variant="top" src="./assets/images/printed.png" style={{ width: '100%', height: '250px' }} className='p-2' />
            <Card.Body className='text-center'>
              <Card.Title>Printed-Shirt</Card.Title>
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

export default Shirts