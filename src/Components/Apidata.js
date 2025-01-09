import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import shirt from '../images/shirtbg-1.png'
import pant from '../images/pantsc-1.png'
import tshirt from '../images/tshirt-3.png'
import shorts from '../images/shorts-2.png'
import ads1 from "../images/ad-1.jpg";
import ads2 from "../images/ad-2.avif";
import ads3 from "../images/ad-3.jpg";
import axios from 'axios';

const apidataUrl = "https://673c4f2196b8dcd5f3f961c0.mockapi.io/Products/Products";
const giturl = 'https://raw.githubusercontent.com/kuralarasu23/react-userpanel-1/refs/heads/main/src/images/'


function Apidata() {
    const [listingType, setListingType] = useState("");
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apidataUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Fetched Data:', data);

                setAllProducts(data);  
                setFilteredProducts(data);
            } catch (error) {
                setError(`Error: ${error.message}`);
            } finally {
                setLoading(false); 
            }
        };

        fetchData();
    }, []);
    
    const handleClick = (productId) => {
        console.log('Navigating to product details:', productId);
        navigate(`/productdetails/${productId}`);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            {/* <h1>Listing Type: {listingType || 'All Products'}</h1> */}
            {/* <Container>
                <Row className='text-center'>
                    <Col md={2} className='p-3'>
                    </Col>
                    <Col md={2} className='p-3 category'>
                        <Link onClick={() => handleCategoryClick("shirts")} to={'/apidata/1'} className='text-decoration-none' >
                            <a href='' className='text-decoration-none text-dark d-block bg-white p-3'>
                                <img src={shirt} style={{ width: '100%', height: '170px' }} className='cateory' />
                                <h4 className='mt-3'>Shirts</h4>
                            </a>
                        </Link>
                    </Col>
                    <Col md={2} className='p-3 category'>
                        <Link onClick={() => handleCategoryClick("pants")} to={'/apidata/2'} className='text-decoration-none'>
                            <a href='' className='text-decoration-none text-dark  d-block bg-white p-3'>
                                <img src={pant} style={{ width: '100%', height: '170px' }} className='cateory' />
                                <h4 className='mt-3'>Pants</h4>
                            </a>
                        </Link>
                    </Col>
                    <Col md={2} className='p-3 category'>
                        <Link onClick={() => handleCategoryClick("tshirts")} to={'/apidata/3'} className='text-decoration-none'>
                            <a href='' className='text-decoration-none text-dark d-block bg-white p-3'>
                                <img src={tshirt} style={{ width: '100%', height: '170px' }} className='cateory' />
                                <h4 className='mt-3'>T-Shirts</h4>
                            </a>
                        </Link>
                    </Col>
                    <Col md={2} className='p-3 category'>
                        <Link onClick={() => handleCategoryClick("shorts")} to={'/apidata/4'} className='text-decoration-none'>
                            <a href='' className='text-decoration-none text-dark  d-block bg-white p-3'>
                                <img src={shorts} style={{ width: '100%', height: '170px' }} className='categry' />
                                <h4 className='mt-3'>Shorts</h4>
                            </a>
                        </Link>
                    </Col>
                    <Col md={2} className='p-3'>
                    </Col>
                </Row>
            </Container> */}
            <Row className='mt-5'>
                <hr></hr>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Col md={3}>
                            <Card className='products' style={{ width: '100%', border: 'none' }}>
                                <Card.Img variant="top" src={giturl + product.image} style={{ width: '100%', height: '250px' }} className='p-2' />
                                <Card.Body className='text-center'>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>{product.price}
                                    </Card.Text>
                                    <a>
                                        <Button className='bg-success px-5'>Buy Now</Button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))

                ) : (
                    <p>no products</p>
                )}
            </Row>
        </div>
    );
}

export default Apidata;
