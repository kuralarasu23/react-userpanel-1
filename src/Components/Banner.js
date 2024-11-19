import React from 'react'
import '../App.css';
import Card from 'react-bootstrap/Card';
import { Row, Container, Col } from 'react-bootstrap';
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSavings } from "react-icons/md";
import { PiClockCountdownFill } from "react-icons/pi";
import { MdPayment } from "react-icons/md";
import banner1 from "../images/banner-1.jpg"
import banner2 from "../images/banner-2.1.avif"
import banner3 from "../images/banner-2.2.avif"


function Banner() {
  return (
    <div>
      <Container>
          <Row>
            <Col md={9}>
              <div class="card bg-dark border-0">
                <img src={banner1} class="card-img" alt="background" height='600px' />
                <div class="card-img-overlay d-flex flex-column justify-content-center text-white">
                  <h5 class="ms-5 fs-3"  data-aos="fade-up" data-aos-duration="1000">Lifestyle Collection</h5>
                  <h5 class="ms-5 fs-2 fw-bold">Men</h5>
                  <h5 class="ms-5 fs-3">SALE UP TO<span className='fs-5 text-danger ms-2'>30% OFF</span></h5>
                  <p class="ms-5 fs-5">Get Free Shipping On Orders over $99.00</p>
                  <button className='button bg-danger text-white fw-bold border-0 ms-5'>Shop now</button>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div class="card bg-dark border-0">
                <img src={banner2} class="card-img" alt="background" height='290px' />
              </div>
              <div class="card bg-dark border-0 mt-3">
                <img src={banner3} class="card-img" alt="background" height='290px' />
              </div>
            </Col>
          </Row>
        
      </Container>
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
      </Container>
          </div>

  )
}

export default Banner