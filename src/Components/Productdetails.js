import React, { useEffect, useState } from 'react'
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
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const api = [
    {
        id: '0',
        image: shirt1,
        name: 'Denim Shirt',
        price: '$499',
    },

    {
        id: '1',
        image: shirt2,
        name: 'Casual Shirt',
        price: '$499',
    },
    {
        id: '2 ',
        image: shirt3,
        name: 'checked Shirt',
        price: '$499',
    }
]

function Productdetails() {
    const [data, setData] = useState([]);
    const { id } = useParams()

    useEffect(() => {
        let filterdata = api.filter(items => items.id == id)

        setData(filterdata)
        console.log(filterdata);

    }, [])

    return (
        <div className='fs-1 fw-bold text-center'>
            <Container>
                <Row>
                    {data.map((items) => (
                        <>
                            <Col md={6}>
                                <img src={items.image} />
                            </Col>
                            <Col md={6}>
                                <h3>{items.name}</h3>
                                <h5>{items.price}</h5>
                            </Col>
                        </>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Productdetails