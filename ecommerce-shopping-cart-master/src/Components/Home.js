import React from 'react'
import CarouselHome from '../Bootstrap Components/Carousel'
import Categoriesbootstrap from '../Bootstrap Components/Categoriesbootstrap'
import Header from '../Bootstrap Components/Header'
import Products from '../Bootstrap Components/Products'

import Topoffers from '../Bootstrap Components/Topoffers'
import Offers from '../Pages/Offers'
import Footer from './Footer'

const Home = () => {
    return (
        <div>
            
            <Categoriesbootstrap />
            <CarouselHome />
            <Products />
            <Topoffers />
            


            <Footer />
        </div>
    )
}

export default Home
