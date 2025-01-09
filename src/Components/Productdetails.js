import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Productsdetails() {
    const giturl = 'https://raw.githubusercontent.com/kuralarasu23/react-userpanel-1/refs/heads/main/src/images/';
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        GetData();
    }, []);

    const GetData = () => {
        axios.get("https://673c4f2196b8dcd5f3f961c0.mockapi.io/Products/Products")
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    };

    useEffect(() => {
        if (data) {
            const filtered = data.filter(item => item.id === id);
            setFilteredData(filtered);
        }
    }, [data, id]);

    return (
        <Container className="py-5">
            <Row className="gy-4">
                {filteredData.map((item) => (
                    <React.Fragment key={item.id}>
                        <Col md={6} className="text-center">
                            <img
                                src={giturl + item.image}
                                alt={item.name}
                                style={{ height: '300px', objectFit: 'cover', borderRadius: '10px' }}
                                className="img-fluid"
                            />
                        </Col>
                        <Col md={6}>
                            <h2 className="mb-3">{item.name}</h2>
                            <h4 className="text-muted mb-4">{item.price}</h4>
                            <p>
                                <strong>Description:</strong> <br />
                                Crafted with premium-quality materials, this piece offers a perfect blend of style and comfort, ensuring you look sharp while staying relaxed all day. Designed with modern tailoring, it features a sleek fit that complements any body type, making it an essential addition to your wardrobe. Whether you're heading to a casual outing or a formal event, this versatile item pairs effortlessly with your favorite trousers, jeans, or blazers. Its durable fabric and fine stitching promise long-lasting wear, while the timeless design keeps you on-trend for every occasion.
                            </p>
                            <div className="mt-4">
                                <Button variant="primary" className="me-2">Add to Cart</Button>
                                <Button variant="success">Buy Now</Button>
                            </div>
                        </Col>
                    </React.Fragment>
                ))}
            </Row>
        </Container>
    );
}

export default Productsdetails;
