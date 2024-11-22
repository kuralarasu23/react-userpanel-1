import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Card, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
import shirtbanner from "../images/shirtbanner.jpg";
import shirt1 from "../images/denimbg-1.png";
import shirt2 from "../images/casualbg-1.png";
import shirt3 from "../images/checked-1.png";
import shirt4 from "../images/printed.png";
import pantsbanner from "../images/pantbanner.jpg";
import pant1 from "../images/pant-1.webp";
import pant2 from "../images/pant-2.jpg";
import pant3 from "../images/pant-3.jpg";
import pant4 from "../images/pant-4.jpg";
import tshirtbanner from "../images/tshirtbanner.jpg";
import tshirt1 from "../images/tshirt-2.jpg";
import tshirt2 from "../images/tshirtbg-1.png";
import tshirt3 from "../images/tshirt-3.png";
import tshirt4 from "../images/tshirt-4.jpg";
import shortsbanner from "../images/shortsbanner.jpg";
import shorts1 from "../images/shorts-2.png";
import shorts2 from "../images/shorts-3.jpg";
import shorts3 from "../images/shorts-4.jpg";
import shorts4 from "../images/shorts-5.jpg";
const api = [
    {
        'name': 'shirt',
        'banner': shirtbanner,
        'id': '1',
        'products': [
            {
                'image': shirt1,
                'name': 'Denim Shirt',
                'price': '$499'
            },
            {
                'image': shirt2,
                'name': 'Casual Shirt',
                'price': '$499'
            },
            {
                'image': shirt3,
                'name': 'checked Shirt',
                'price': '$499'
            },
            {
                'image': shirt4,
                'name': 'Printed Shirt',
                'price': '$499'
            },
        ]

    },
    {
        'name': 'pants',
        'banner': pantsbanner,
        'id': '2',
        'products': [
            {
                'image': pant1,
                'name': 'Formalpant',
                'price': '$499'
            },
            {
                'image': pant2,
                'name': 'Cargo-panmt',
                'price': '$499'
            },
            {
                'image': pant3,
                'name': 'Track-pant',
                'price': '$499'
            },
            {
                'image': pant4,
                'name': 'Jean',
                'price': '$499'
            },
        ]

    },
    {
        'name': 'T-shirts',
        'banner': tshirtbanner,
        'id': '3',
        'products': [
            {
                'image': tshirt1,
                'name': 'Oversized Tshirt',
                'price': '$499'
            },
            {
                'image': tshirt2,
                'name': 'T-shirt',
                'price': '$499'
            },
            {
                'image': tshirt3,
                'name': 'Full-sleeve',
                'price': '$499'
            },
            {
                'image': tshirt4,
                'name': 'Polo-TShirt',
                'price': '$499'
            },
        ]

    },
    {
        'name': 'Shorts',
        'banner': shortsbanner,
        'id': '4',
        'products': [
            {
                'image': shorts1,
                'name': 'Chino-Shorts',
                'price': '$499'
            },
            {
                'image': shorts2,
                'name': 'Cotton Stretch Shorts',
                'price': '$499'
            },
            {
                'image': shorts3,
                'name': 'Gym-Shorts',
                'price': '$499'
            },
            {
                'image': shorts4,
                'name': 'Denim-shorts',
                'price': '$499'
            },
        ]

    }
];


function Apidata() {
    const [banner, setBanner] = useState("")
    const [products, setProducts] = useState([])
    const [name, setName] = useState("")
    const { id } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        const shirt = api.filter(items => items.id === id)
        console.log(shirt);

        setBanner(shirt[0].banner)
        setProducts(shirt[0].products)


    }, [])
    const HandleClick = (id) => {
        console.log(id);
        navigate(`/productdetails/${id}`)
    }

    return (
        <div>
            <Container>
                <div class="card bg-dark border-0 mb-5">
                    <img src={banner} class="card-img" alt="background" height='600px' />
                    <div class="card-img-overlay d-flex flex-column justify-content-center text-white">
                        <h5 class="ms-5 fs-4 display-3">Lifestyle Collection</h5>
                        <h5 class="ms-5 fs-1 fw-bold text-danger">Trends For Men</h5>
                    </div>
                </div>
                <Row>
                    {products.map((a, index) => (
                        <Col md={3} onClick={() => HandleClick(index)}>
                            <Card className='products' style={{ width: '100%', border: 'none' }}>
                                <Card.Img variant="top" src={a.image} style={{ width: '100%', height: '250px' }} className='p-2' />
                                <Card.Body className='text-center'>
                                    <Card.Title>{a.name}</Card.Title>
                                    <Card.Text>{a.price}
                                    </Card.Text>
                                    <a>
                                        <Button className='bg-success px-5'>Buy Now</Button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

        </div>
    )
}

export default Apidata