import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselItem, Col, Image, Container, Row, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Shopping/shopping-actions';


const Product = ({productData}) => {

  const[availableqty, setAvailableqty] = useState(productData.availableStock)

  const dispatch = useDispatch()

  useEffect(()=>{

    setAvailableqty(productData.availableStock)

  },[availableqty, productData.availableStock])



  return (
    <div>
      <Container className="ms-5" style={{display:"flex", justifyContent:"center"}} >
        
        <Row className="my-5 text-center">
          <Col md={4} lg={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={productData.image} />
              <Card.Body>
                <Card.Title>{productData.title}</Card.Title>
                <Card.Text>
                {productData.desc}
                </Card.Text>

                <Card.Text>
                Single product Price : {productData.price} Rs
                </Card.Text>

                <Card.Text>
                Total Available Qty in Stock : {availableqty} 
                </Card.Text>

                {availableqty === 0 ? <button class="btn btn-danger mx-3 disabled">Sold Out</button>
                : <button onClick={()=> dispatch(addToCart(productData.id))} class="btn btn-primary mx-3">Add to Cart <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg></button>}
                
              </Card.Body>
            </Card>

          </Col>



        </Row>
      </Container>



      
    </div>
  )
}

export default Product
