import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Products() {
    return (
        <div className='mt-5'>
            <Container>
                <Row className='text-center'>
                    <Col md={2} className='p-3'>
                    </Col>
                    <Col md={2} className='p-3 category'>
                        <Link to={'/shirts'} className='text-decoration-none' >
                            <a href='' className='text-decoration-none text-dark d-block bg-white p-3'>
                                <img src="./assets/images/shirtbg-1.png" style={{ width: '100%', height: '170px' }} className='cateory' />
                                <h4 className='mt-3'>Shirts</h4>
                            </a>
                        </Link>
                    </Col>
                    <Col md={2} className='p-3 category'>
                        <Link to={'/pants'} className='text-decoration-none'>
                            <a href='' className='text-decoration-none text-dark  d-block bg-white p-3'>
                                <img src="./assets/images/pantsc-1.png" style={{ width: '100%', height: '170px' }} className='cateory' />
                                <h4 className='mt-3'>Pants</h4>
                            </a>
                        </Link>
                    </Col>
                    <Col md={2} className='p-3 category'>
                        <Link to={'/tshirt'} className='text-decoration-none'>
                            <a href='' className='text-decoration-none text-dark d-block bg-white p-3'>
                                <img src="./assets/images/tshirt-3.png" style={{ width: '100%', height: '170px' }} className='cateory' />
                                <h4 className='mt-3'>T-Shirts</h4>
                            </a>
                        </Link>
                    </Col>
                    <Col md={2} className='p-3 category'>
                        <Link to={'/shorts'} className='text-decoration-none'>
                            <a href='' className='text-decoration-none text-dark  d-block bg-white p-3'>
                                <img src="./assets/images/shorts-2.png" style={{ width: '100%', height: '170px' }} className='categry' />
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
                <Row className='mt-5'>
                    <Col xs={3}><Card className='products' style={{ width: '16rem', border: 'none' }}>
                        <Card.Img variant="top" src="./assets/images/pant-1.webp" style={{ width: '100%', height: '250px' }} className='p-2' />
                        <Card.Body className='text-center'>
                            <Card.Title>Formal Pant</Card.Title>
                            <Card.Text>₹499
                            </Card.Text>
                            <a>
                                <Button className='bg-success px-5'>Buy Now</Button>
                            </a>
                        </Card.Body>
                    </Card></Col>
                    <Col xs={3}><Card className='products' style={{ width: '16rem', border: 'none' }}>
                        <Card.Img variant="top" src="./assets/images/pant-2.jpg" style={{ width: '100%', height: '250px' }} className='p-2' />
                        <Card.Body className='text-center'>
                            <Card.Title>Cargo-Pant</Card.Title>
                            <Card.Text>₹499
                            </Card.Text>
                            <a>
                                <Button className='bg-success px-5'>Buy Now</Button>
                            </a>
                        </Card.Body>
                    </Card></Col>
                    <Col xs={3}><Card className='products' style={{ width: '16rem', border: 'none' }}>
                        <Card.Img variant="top" src="./assets/images/pant-3.jpg" style={{ width: '100%', height: '250px' }} className='p-2' />
                        <Card.Body className='text-center'>
                            <Card.Title>Track-Pant</Card.Title>
                            <Card.Text>₹499
                            </Card.Text>
                            <a>
                                <Button className='bg-success px-5'>Buy Now</Button>
                            </a>
                        </Card.Body>
                    </Card></Col>
                    <Col xs={3}><Card className='products' style={{ width: '16rem', border: 'none' }}>
                        <Card.Img variant="top" src="./assets/images/pant-4.jpg" style={{ width: '100%', height: '250px' }} className='p-2' />
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
                <Row className='mt-5'>
                    <Col xs={3}><Card className='products' style={{ width: '16rem', border: 'none' }}>
                        <Card.Img variant="top" src="./assets/images/shorts-2.jpg" style={{ width: '100%', height: '250px' }} className='p-2' />
                        <Card.Body className='text-center'>
                            <Card.Title>Chino-Shorts</Card.Title>
                            <Card.Text>₹499
                            </Card.Text>
                            <a>
                                <Button className='bg-success px-5'>Buy Now</Button>
                            </a>
                        </Card.Body>
                    </Card></Col>
                    <Col xs={3}><Card className='products' style={{ width: '16rem', border: 'none' }}>
                        <Card.Img variant="top" src="./assets/images/shorts-3.jpg" style={{ width: '100%', height: '250px' }} className='p-2' />
                        <Card.Body className='text-center'>
                            <Card.Title>Cotton Stretch Shorts</Card.Title>
                            <Card.Text>₹499
                            </Card.Text>
                            <a>
                                <Button className='bg-success px-5'>Buy Now</Button>
                            </a>
                        </Card.Body>
                    </Card></Col>
                    <Col xs={3}><Card className='products' style={{ width: '16rem', border: 'none' }}>
                        <Card.Img variant="top" src="./assets/images/shorts-4.jpg" style={{ width: '100%', height: '250px' }} className='p-2' />
                        <Card.Body className='text-center'>
                            <Card.Title>Gym-Shorts</Card.Title>
                            <Card.Text>₹499
                            </Card.Text>
                            <a>
                                <Button className='bg-success px-5'>Buy Now</Button>
                            </a>
                        </Card.Body>
                    </Card></Col>
                    <Col xs={3}><Card className='products' style={{ width: '16rem', border: 'none' }}>
                        <Card.Img variant="top" src="./assets/images/shorts-5.jpg" style={{ width: '100%', height: '250px' }} className='p-2' />
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
                    <Col xs>
                        <div class="card border- mt-5">
                            <img src="./assets/images/banner-18.jpg" class="card-img" alt="background" height='200px' />
                            <div class="card-img-overlay d-flex flex-column justify-content-center">
                                <h5 class="card-title">NEW ARRIVALS</h5>
                                <p class="card-text fs-2">SKY CLOTHES SALE
                                    Up to <span className='text-danger'>35% Off</span></p>
                                <button className='button border-0'>Shop now</button>
                            </div>
                        </div>
                    </Col>
                    <Col xs>
                        <div class="card border- mt-5">
                            <img src="./assets/images/ads.avif" class="card-img" alt="background" height='200px' />
                            <div class="card-img-overlay d-flex flex-column justify-content-center">
                                <h5 class="card-title d-none">NEW ARRIVALS</h5>
                                <p class="card-text fs-2 "></p>
                                {/* <button className='button border-0 mt-5'>Shop now</button> */}
                            </div>
                        </div>
                    </Col>
                    <Col xs>
                        <div class="card border- mt-5">
                            <img src="./assets/images/banner-15.jpg" class="card-img" alt="background" height='200px' />
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