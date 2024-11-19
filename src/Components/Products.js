import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import shirt from '../images/shirtbg-1.png'
import pant from '../images/pantsc-1.png'
import tshirt from '../images/tshirt-3.png'
import shorts from '../images/shorts-2.png'
import shirt1 from "../images/denimbg-1.png";
import shirt2 from "../images/casualbg-1.png";
import shirt3 from "../images/checked-1.png";
import shirt4 from "../images/printed.png";
import pant1 from "../images/pant-1.webp";
import pant2 from "../images/pant-2.jpg";
import pant3 from "../images/pant-3.jpg";
import pant4 from "../images/pant-4.jpg";
import tshirt1 from "../images/tshirt-2.jpg";
import tshirt2 from "../images/tshirtbg-1.png";
import tshirt3 from "../images/tshirt-3.png";
import tshirt4 from "../images/tshirt-4.jpg";
import shorts1 from "../images/shorts-2.png";
import shorts2 from "../images/shorts-3.jpg";
import shorts3 from "../images/shorts-4.jpg";
import shorts4 from "../images/shorts-5.jpg";
import ads1 from "../images/ad-1.jpg";
import ads2 from "../images/ad-2.avif";
import ads3 from "../images/ad-3.jpg";


function Products() {
    return (
        <div className='mt-5'>
            <Container>
                <Row className='text-center'>
                    <Col md={2} className='p-3'>
                    </Col>
                    <Col md={2} className='p-3 category'>
                        <Link to={'/apidata/1'} className='text-decoration-none' >
                            <a href='' className='text-decoration-none text-dark d-block bg-white p-3'>
                                <img src={shirt} style={{ width: '100%', height: '170px' }} className='cateory' />
                                <h4 className='mt-3'>Shirts</h4>
                            </a>
                        </Link>
                    </Col>
                    <Col md={2} className='p-3 category'>
                        <Link to={'/apidata/2'} className='text-decoration-none'>
                            <a href='' className='text-decoration-none text-dark  d-block bg-white p-3'>
                                <img src={pant} style={{ width: '100%', height: '170px' }} className='cateory' />
                                <h4 className='mt-3'>Pants</h4>
                            </a>
                        </Link>
                    </Col>
                    <Col md={2} className='p-3 category'>
                        <Link to={'/apidata/3'} className='text-decoration-none'>
                            <a href='' className='text-decoration-none text-dark d-block bg-white p-3'>
                                <img src={tshirt} style={{ width: '100%', height: '170px' }} className='cateory' />
                                <h4 className='mt-3'>T-Shirts</h4>
                            </a>
                        </Link>
                    </Col>
                    <Col md={2} className='p-3 category'>
                        <Link to={'/apidata/4'} className='text-decoration-none'>
                            <a href='' className='text-decoration-none text-dark  d-block bg-white p-3'>
                                <img  src={shorts} style={{ width: '100%', height: '170px' }} className='categry' />
                                <h4 className='mt-3'>Shorts</h4>
                            </a>
                        </Link>
                    </Col>
                    <Col md={2} className='p-3'>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='mt-5'>
                    <hr></hr>
                    <h1 className='text-center mb-5 display-4 mt-2' >Men's Fashions</h1>
                    <Col md={3}>
                        <Card className='products' style={{ width: '100%', border: 'none' }}>
                            <Card.Img variant="top" src={shirt1} style={{ width: '100%', height: '250px' }} className='p-2' />
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
                    <Col md={3}><Card className='products' style={{ width: '100%', border: 'none' }}>
                        <Card.Img variant="top" src={shirt2} style={{ width: '100%', height: '250px' }} className='p-2' />
                        <Card.Body className='text-center'>
                            <Card.Title>Casual Shirt</Card.Title>
                            <Card.Text>₹499
                            </Card.Text>
                            <a>
                                <Button className='bg-success px-5'>Buy Now</Button>
                            </a>
                        </Card.Body>
                    </Card></Col>
                    <Col md={3}><Card className='products' style={{ width: '100%', border: 'none' }}>
                        <Card.Img variant="top" src={shirt3} style={{ width: '100%', height: '250px' }} className='p-2' />
                        <Card.Body className='text-center'>
                            <Card.Title>checked Shirt</Card.Title>
                            <Card.Text>₹499
                            </Card.Text>
                            <a>
                                <Button className='bg-success px-5'>Buy Now</Button>
                            </a>
                        </Card.Body>
                    </Card></Col>
                    <Col md={3}><Card className='products' style={{ width: '100%', border: 'none' }}>
                        <Card.Img variant="top" src={shirt4} style={{ width: '100%', height: '250px' }} className='p-2' />
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
                <Row className='mt-5'>
                    <Col md={3}><Card className='products' style={{  width: '100%', border: 'none' }}>
                        <Card.Img variant="top" src={pant1} style={{ width: '100%', height: '250px' }} className='p-2' />
                        <Card.Body className='text-center'>
                            <Card.Title>Formal Pant</Card.Title>
                            <Card.Text>₹499
                            </Card.Text>
                            <a>
                                <Button className='bg-success px-5'>Buy Now</Button>
                            </a>
                        </Card.Body>
                    </Card></Col>
                    <Col md={3}><Card className='products' style={{  width: '100%', border: 'none' }}>
                        <Card.Img variant="top" src={pant2} style={{ width: '100%', height: '250px' }} className='p-2' />
                        <Card.Body className='text-center'>
                            <Card.Title>Cargo-Pant</Card.Title>
                            <Card.Text>₹499
                            </Card.Text>
                            <a>
                                <Button className='bg-success px-5'>Buy Now</Button>
                            </a>
                        </Card.Body>
                    </Card></Col>
                    <Col md={3}><Card className='products' style={{ width: '100%', border: 'none' }}>
                        <Card.Img variant="top" src={pant3} style={{ width: '100%', height: '250px' }} className='p-2' />
                        <Card.Body className='text-center'>
                            <Card.Title>Track-Pant</Card.Title>
                            <Card.Text>₹499
                            </Card.Text>
                            <a>
                                <Button className='bg-success px-5'>Buy Now</Button>
                            </a>
                        </Card.Body>
                    </Card></Col>
                    <Col md={3}><Card className='products' style={{  width: '100%', border: 'none' }}>
                        <Card.Img variant="top" src={pant4} style={{ width: '100%', height: '250px' }} className='p-2' />
                        <Card.Body className='text-center'>
                            <Card.Title>Jean</Card.Title>
                            <Card.Text>₹499
                            </Card.Text>
                            <a>
                                <Button className='bg-success px-5'>Buy Now</Button>
                            </a>
                        </Card.Body>
                    </Card></Col>
                </Row>
                <Row className='mt-5'>
                    <Col md={3}><Card className='products' style={{ width: '100%', border: 'none' }}>
                        <Card.Img variant="top" src={tshirt1} style={{ width: '100%', height: '250px' }} className='p-2' />
                        <Card.Body className='text-center'>
                            <Card.Title>Oversized Tshirts</Card.Title>
                            <Card.Text>₹499
                            </Card.Text>
                            <a>
                                <Button className='bg-success px-5'>Buy Now</Button>
                            </a>
                        </Card.Body>
                    </Card></Col>
                    <Col md={3}><Card className='products' style={{  width: '100%', border: 'none' }}>
                        <Card.Img variant="top" src={tshirt2} style={{ width: '100%', height: '250px' }} className='p-2' />
                        <Card.Body className='text-center'>
                            <Card.Title>T-shirt</Card.Title>
                            <Card.Text>₹499
                            </Card.Text>
                            <a>
                                <Button className='bg-success px-5'>Buy Now</Button>
                            </a>
                        </Card.Body>
                    </Card></Col>
                    <Col md={3}><Card className='products' style={{ width: '100%', border: 'none' }}>
                        <Card.Img variant="top" src={tshirt3} style={{ width: '100%', height: '250px' }} className='p-2' />
                        <Card.Body className='text-center'>
                            <Card.Title>Full-Sleeve</Card.Title>
                            <Card.Text>₹499
                            </Card.Text>
                            <a>
                                <Button className='bg-success px-5'>Buy Now</Button>
                            </a>
                        </Card.Body>
                    </Card></Col>
                    <Col md={3}><Card className='products' style={{  width: '100%', border: 'none' }}>
                        <Card.Img variant="top" src={tshirt4} style={{ width: '100%', height: '250px' }} className='p-2' />
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
                <Row className='mt-5'>
                    <Col md={3}><Card className='products' style={{ width: '100%', border: 'none' }}>
                        <Card.Img variant="top" src={shorts1} style={{ width: '100%', height: '250px' }} className='p-2' />
                        <Card.Body className='text-center'>
                            <Card.Title>Chino-Shorts</Card.Title>
                            <Card.Text>₹499
                            </Card.Text>
                            <a>
                                <Button className='bg-success px-5'>Buy Now</Button>
                            </a>
                        </Card.Body>
                    </Card></Col>
                    <Col md={3}><Card className='products' style={{  width: '100%', border: 'none' }}>
                        <Card.Img variant="top" src={shorts2} style={{ width: '100%', height: '250px' }} className='p-2' />
                        <Card.Body className='text-center'>
                            <Card.Title>Cotton Stretch Shorts</Card.Title>
                            <Card.Text>₹499
                            </Card.Text>
                            <a>
                                <Button className='bg-success px-5'>Buy Now</Button>
                            </a>
                        </Card.Body>
                    </Card></Col>
                    <Col md={3}><Card className='products' style={{  width: '100%', border: 'none' }}>
                        <Card.Img variant="top" src={shorts3} style={{ width: '100%', height: '250px' }} className='p-2' />
                        <Card.Body className='text-center'>
                            <Card.Title>Gym-Shorts</Card.Title>
                            <Card.Text>₹499
                            </Card.Text>
                            <a>
                                <Button className='bg-success px-5'>Buy Now</Button>
                            </a>
                        </Card.Body>
                    </Card></Col>
                    <Col md={3}><Card className='products' style={{  width: '100%' , border: 'none' }}>
                        <Card.Img variant="top" src={shorts4} style={{ width: '100%', height: '250px' }} className='p-2' />
                        <Card.Body className='text-center'>
                            <Card.Title>Denim-shorts</Card.Title>
                            <Card.Text>₹499
                            </Card.Text>
                            <a>
                                <Button className='bg-success px-5'>Buy Now</Button>
                            </a>
                        </Card.Body>
                    </Card></Col>
                </Row>
                <Row className='mt-5'>
                    <Col md={4}>
                        <div class="card border- mt-5">
                            <img src={ads1} class="card-img" alt="background" height='200px' />
                            <div class="card-img-overlay d-flex flex-column justify-content-center">
                                <h5 class="card-title">NEW ARRIVALS</h5>
                                <p class="card-text fs-2">SKY CLOTHES SALE
                                    Up to <span className='text-danger'>35% Off</span></p>
                                <button className='button border-0'>Shop now</button>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div class="card border- mt-5">
                            <img src={ads2} class="card-img" alt="background" height='200px' />
                            <div class="card-img-overlay d-flex flex-column justify-content-center">
                                <h5 class="card-title d-none">NEW ARRIVALS</h5>
                                <p class="card-text fs-2 "></p>
                                {/* <button className='button border-0 mt-5'>Shop now</button> */}
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div class="card border- mt-5">
                            <img src={ads3} class="card-img" alt="background" height='200px' />
                            <div class="card-img-overlay d-flex flex-column justify-content-center">
                                <h5 class="card-title">BEST SELLER</h5>
                                <p class="card-text fs-2">TRENDING MEN'S
                                    <br></br>SUN-GLASSES</p>
                                <button className='button border-0'>Shop now</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Products