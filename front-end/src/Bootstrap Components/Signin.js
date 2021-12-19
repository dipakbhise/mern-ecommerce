import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselItem, Col, Image, Container, Row, Card, Button, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Signin = () => {
    return (
        <>

<div className="d-flex justify-content-center my-5" style={{height:"90vh"}}>

<Form className="w-50 ">


<Form.Group className="mb-1" controlId="formBasicEmail">
<Form.Label>EnterYour Name</Form.Label>
<Form.Control type="text" placeholder="Email" />
</Form.Group>


<Form.Group className="mb-1" controlId="formBasicPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password" />
</Form.Group>



<Button variant="primary" type="submit" className="mt-4 w-25">
Submit
</Button>
</Form>

</div>
            
        </>
    )
}

export default Signin
