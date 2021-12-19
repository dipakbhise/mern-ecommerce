import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselItem, Col, Image, Container, Row, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CarouselHome = () => {
    return (
        <>


        <Carousel className="mx-2">
  <Carousel.Item>
    <img
      className="d-block w-100 fluid cover "
      src="https://source.unsplash.com/2000x460/?mobile"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 fluid cover"
      src="https://source.unsplash.com/2000x460/?laptop"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 fluid cover"
      src="https://source.unsplash.com/2000x460/?product"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>






            
        </>
    )
}

export default CarouselHome
