import React, { useEffect, useState } from 'react'
import { Row, Container, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const banner = 'https://raw.githubusercontent.com/kuralarasu23/react-userpanel-1/refs/heads/main/src/images/tshirtbanner.jpg'


function Shirts() {
  const giturl = 'https://raw.githubusercontent.com/kuralarasu23/react-userpanel-1/refs/heads/main/src/images/'
  const [data, setData] = useState([]);
  const { id } = useParams()
  const navigate = useNavigate();

  useEffect(() => {
    GetData();
  }, []);
  const Handleclick = (id) => {
    console.log(id);
    navigate(`/productsdetails/${id}`)
  }

  const GetData = () => {
    axios.get("https://673c4f2196b8dcd5f3f961c0.mockapi.io/Products/Products")
      .then(response => setData(response.data))
      .catch(error => {
        console.error("Error fetching data:", error);

      });
  };

  const filterdata = data.filter(items => items.listingType == "tshirts")
  console.log(filterdata);

  return (
    <div>
      <Container>
      <div class="card bg-dark border-0">
        <img src={banner} class="card-img" alt="background" height='600px' />
        <div class="card-img-overlay d-flex flex-column justify-content-center text-white">
          <h5 class="ms-5 fs-4 display-3">Lifestyle Collection</h5>
          <h5 class="ms-5 fs-1 fw-bold text-danger">T-Shirts For Men</h5>
        </div>
      </div>
        <Row className='py-5'>
          {filterdata.map((a) => (
            <Col md={3} onClick={() => Handleclick(a.id)}>
              <Card style={{ width: '100%', height: 'auto', marginTop: '30px' }} className='img'>
                <Card.Img variant="top" src={giturl + a.image} style={{ height: '254px' }} />
                <Card.Body>
                  <Card.Title className="fs-6">{a.name}</Card.Title>
                  <Card.Text>{a.price}</Card.Text>
                  <Button variant="primary">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Shirts