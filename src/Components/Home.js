import React from 'react'
import Footer from './Footer';
import Navbarr from './Navbar';
import Banner from './Banner';
import Products from './Products';
import Apidata from './Apidata';

function Home() {
    return (
        <div>
            {/* <Navbarr /> */}
            <Banner />
            <Products />
            {/* <Footer /> */}
        </div>
    )
}

export default Home