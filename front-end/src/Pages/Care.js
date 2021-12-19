import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselItem, Col, Image, Container, Row, Card, Button, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Header from '../Bootstrap Components/Header';
import Footer from '../Components/Footer';

const Care = () => {
    return (
        <>
        

        <div className="d-flex justify-content-center my-5" style={{height:"90vh"}}>

        <Form className="w-50 ">


        <Form.Group className="mb-1" controlId="formBasicEmail">
    <Form.Label>EnterYour Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Your Name" />
  </Form.Group>

  <Form.Group className="mb-1" controlId="formBasicEmail">
    <Form.Label>Mobile Number</Form.Label>
    <Form.Control type="email" placeholder="Enter Mobile NUmber" />
    
  </Form.Group>
        
  <Form.Group className="mb-1" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-1" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Label>Enter Your Message</Form.Label>
    <Form.Control type="textarea" placeholder="Enter Message" />

  <Button variant="primary" type="submit" className="mt-4 w-25">
    Submit
  </Button>
</Form>

</div>

        
            
        </>
    )
}

export default Care
