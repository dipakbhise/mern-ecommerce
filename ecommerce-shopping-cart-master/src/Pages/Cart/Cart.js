import React, { useEffect, useState } from 'react'
import Header from '../../Bootstrap Components/Header'
import Footer from '../../Components/Footer'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import { Button } from 'react-bootstrap'

const Cart = () => {

    const cartProducts = useSelector((state)=>state.shop.cart)

    const[totalprice, setTotalprice] = useState(0);
    const[totalItems, setTotalitems] = useState(0)

    useEffect(()=>{

        let items = 0;
        let price = 0;

        cartProducts.forEach(elm => {

            items+= elm.qty;
            price+= elm.qty * elm.price
            
        });

        setTotalprice(price);
        setTotalitems(items)

        
    }, [cartProducts, totalprice, totalItems, setTotalitems, setTotalprice])




    return (
        <>
        <Header/>

        <div style={{display:"flex", justifyContent:"space-around", padding:"0px 300px" }}>

        

        <div>

        <h1 className="text-center my-4">Cart Items</h1>
        {
            cartProducts.map((prod, index)=>(
                <CartItem key={index} productData = {prod}  />
            ))
        }

        </div>

        <div className="text-center" style={{padding:"20px"}}>

        <h1 className="m-5">Cart Summary</h1>

        <h3 className="my-3">Total Items In Cart : {totalItems}  </h3>

        <h3>Total Price : {totalprice} </h3>

        <Button className="my-3">Payment</Button>




        </div>

        </div>

        
            
        </>
    )
}

export default Cart;

