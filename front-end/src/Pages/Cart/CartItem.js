import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselItem, Col, Image, Container, Row, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch } from 'react-redux';
import { adjustQty, removeFromCart } from '../../redux/Shopping/shopping-actions';


const CartItem = ({productData}) => {

  const dispatch = useDispatch()

  const[input, setInput] = useState(productData.qty)

  const handler = (e)=>{

    setInput(e.target.value);

    dispatch(adjustQty(productData.id, e.target.value))


  }




  return (
    <div>
      <Container  >
        
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
                <label htmlFor="qty">Quantity</label>
                <input type="number" min="1" id="qty" name="qty" value={input} onChange={(e)=>handler(e)} style={{background:"#007bff", color:"white", width:"100px", padding:"6px 25px", margin:"-40px 0 0px 0"}}/>
                </Card.Text>

                <Card.Text>
                Price : {productData.price} Rs
                </Card.Text>

                <Card.Text>
                Total Price : {productData.price * productData.qty} Rs
                </Card.Text>
                
                <button onClick={()=> dispatch(removeFromCart(productData.id))} class="btn btn-primary mx-3 round">remove from Cart</button>
                {/* <button class="btn btn-primary">Details</button> */}
              </Card.Body>
            </Card>

          </Col>



        </Row>
      </Container>



      
    </div>
  )
}

export default CartItem;
