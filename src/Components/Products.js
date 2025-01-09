import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';

import shirt from '../images/shirtbg-1.png'
import pant from '../images/pantsc-1.png'
import tshirt from '../images/tshirt-3.png'
import shorts from '../images/shorts-2.png'
import ads1 from "../images/ad-1.jpg";
import ads2 from "../images/ad-2.avif";
import ads3 from "../images/ad-3.jpg";
import axios from 'axios';
function Products() {
    const giturl = 'https://raw.githubusercontent.com/kuralarasu23/react-userpanel-1/refs/heads/main/src/images/'
    const apidata = "https://673c4f2196b8dcd5f3f961c0.mockapi.io/Products/Products"

    const [image, setImage] = useState([]);
    const navigate =useNavigate('');

    useEffect(() => {
        GetData();
    }, []);
    const Handleclick = (id) => {
        console.log(id);
        navigate(`/productsdetails/${id}`)
    }


    const GetData = () => {
        axios
            .get("https://673c4f2196b8dcd5f3f961c0.mockapi.io/Products/Products")
            .then((response) => {

                const shirt1 = response.data.filter((a) => a.id === "1");
                const shirt2 = response.data.filter((a) => a.id === "2");
                const shirt3 = response.data.filter((a) => a.id === "3");
                const shirt4 = response.data.filter((a) => a.id === "4");
                const pant1 = response.data.filter((a) => a.id === "5");
                const pant2 = response.data.filter((a) => a.id === "6");
                const pant3 = response.data.filter((a) => a.id === "7");
                const pant4 = response.data.filter((a) => a.id === "8");
                const tshirt1 = response.data.filter((a) => a.id === "9");
                const tshirt2 = response.data.filter((a) => a.id === "10");
                const tshirt3 = response.data.filter((a) => a.id === "11");
                const tshirt4 = response.data.filter((a) => a.id === "12");
                const shorts1 = response.data.filter((a) => a.id === "13");
                const shorts2 = response.data.filter((a) => a.id === "14");
                const shorts3 = response.data.filter((a) => a.id === "15");
                const shorts4 = response.data.filter((a) => a.id === "16");



                setImage([...shirt1, ...shirt2, ...shirt3, ...shirt4, ...pant1, ...pant2, ...pant3, ...pant4, ...tshirt1, ...tshirt2, ...tshirt3, ...tshirt4, ...shorts1, ...shorts2, ...shorts3, ...shorts4]);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };
    return (
        <div className='mt-5'>
            <Container>
                <Row className='text-center'>
                    <Col md={2} className='p-3'>
                    </Col>
                    <Col md={2} className='p-3 category'>
                        <Link to={'/shirts'} className='text-decoration-none' >
                            <a href='' className='text-decoration-none text-dark d-block bg-white p-3'>
                                <img src={shirt} style={{ width: '100%', height: '170px' }} className='cateory' />
                                <h4 className='mt-3'>Shirts</h4>
                            </a>
                        </Link>
                    </Col>
                    <Col md={2} className='p-3 category'>
                        <Link to={'/pants'} className='text-decoration-none'>
                            <a href='' className='text-decoration-none text-dark  d-block bg-white p-3'>
                                <img src={pant} style={{ width: '100%', height: '170px' }} className='cateory' />
                                <h4 className='mt-3'>Pants</h4>
                            </a>
                        </Link>
                    </Col>
                    <Col md={2} className='p-3 category'>
                        <Link to={"/tshirt"} className='text-decoration-none'>
                            <a href='' className='text-decoration-none text-dark d-block bg-white p-3'>
                                <img src={tshirt} style={{ width: '100%', height: '170px' }} className='cateory' />
                                <h4 className='mt-3'>T-Shirts</h4>
                            </a>
                        </Link>
                    </Col>
                    <Col md={2} className='p-3 category'>
                        <Link to={'/shorts'} className='text-decoration-none'>
                            <a href='' className='text-decoration-none text-dark  d-block bg-white p-3'>
                                <img src={shorts} style={{ width: '100%', height: '170px' }} className='categry' />
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
                    {image.map((items) => (
                        <Col md={3} onClick={() => Handleclick(items.id)}>
                            <Card className='products mb-5' style={{ width: '100%', border: 'none' }}>
                                <Card.Img variant="top" src={giturl + items.image} style={{ width: '100%', height: '250px' }} className='p-2' />
                                <Card.Body className='text-center'>
                                    <Card.Title>{items.name}</Card.Title>
                                    <Card.Text>{items.price}
                                    </Card.Text>
                                    <a>
                                        <Button className='bg-success px-5'>Buy Now</Button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
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