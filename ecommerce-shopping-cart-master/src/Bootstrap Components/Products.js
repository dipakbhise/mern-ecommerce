import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'

const Products = () => {

    const reduxProduct = useSelector((state)=>state.shop.products)




    return (
        <div>
        <h1 className="text-center">Products</h1>
        <div className="row mx-5">
        {
            reduxProduct.map((prod, index)=>(
                <Product key={index} productData = {prod}  />
            ))
        }

        </div>
            
        </div>
    )
}

export default Products
