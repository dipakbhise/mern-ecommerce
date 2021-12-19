import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Form, Navbar, FormControl, CarouselItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from "react-router-dom";
import CarouselHome from './Carousel';
import Footer from '../Components/Footer';
import { useSelector } from 'react-redux';

const Header = () => {


  const cartItems = useSelector((state)=> state.shop.cart)

  const[cartcount, setCartCount] = useState(0)

  useEffect(()=>{

    let count = 0;
    cartItems.forEach(elm => {

      count+=elm.qty
      
    });

    setCartCount(count)
  },[cartItems, cartcount ])


    return (
        <>


  <Navbar bg="dark" text="white" variant="dark"  sticky="top" >

  <LinkContainer to="/ecommerce-shopping-cart" my-2 exact>
    <Navbar.Brand >Ecommerce</Navbar.Brand>
    </LinkContainer>

    <Nav className="mr-auto my-2 py-2 ">
    <LinkContainer to="/offers" exact>
      <Nav.Link  >Offers</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/categories" exact>
      <Nav.Link >Categories</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/about-us" exact className="text-nowrap">
      <Nav.Link >About Us</Nav.Link>
      </LinkContainer>

    </Nav>
    <Form inline className="m-auto w-50">
      <FormControl type="text"  placeholder="Search" className="mr-sm-2 px-5 mx-5 w-75" />
      <Button variant="outline-light" className="text-light bg-success">Search</Button>
     
      
    </Form>

    <NavLink to="/cart" className="btn text-secondary bg-light mx-5 px-2 " style={{width:"100px"}}> Cart <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>  <span class="font-weight-bold">{cartcount}</span></NavLink>
<NavLink to="/signin" style={{width:"100px"}} className="btn text-light bg-success mx-2 border-light ">Sign In</NavLink>
<NavLink to="/help" style={{width:"100px"}} className="btn text-light bg-success mx-2 border-light ">Sign Up</NavLink>
    <NavLink to="/help" className="btn text-light bg-success px-3 border-light ">Help</NavLink>
  </Navbar>





  


  

  
            
        </>
    )
}

export default Header
