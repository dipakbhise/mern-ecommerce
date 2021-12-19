import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselItem, Col, Image, Container, Row, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Categoriesbootstrap = () => {
    return (
        <>
            <Container className="mt-3">
  <Row>
    
    <Col xs={6} md={2}>
      <Image src="https://source.unsplash.com/70x70/?mobile" roundedCircle />
      <p>Mobiles</p>
    </Col>

    <Col xs={6} md={2}>
      <Image src="https://source.unsplash.com/70x70/?laptop" roundedCircle />
      <p>Laptop</p>
    </Col>

    <Col xs={6} md={2}>
      <Image src="https://source.unsplash.com/70x70/?headphones" roundedCircle />
      <p>Headphones</p>
    </Col>

    <Col xs={6} md={2}>
      <Image src="https://source.unsplash.com/70x70/?furniture" roundedCircle />
      <p>Furniture</p>
    </Col>

    <Col xs={6} md={2}>
      <Image src="https://source.unsplash.com/70x70/?electronics" roundedCircle />
      <p>Electronics</p>
    </Col>

    <Col xs={6} md={2}>
      <Image src="https://source.unsplash.com/70x70/?essential" roundedCircle />
      <p>Essentials</p>
    </Col>

    
  </Row>
</Container>
        </>
    )
}

export default Categoriesbootstrap
