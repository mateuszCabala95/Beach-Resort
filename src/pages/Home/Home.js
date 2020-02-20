import React from 'react';
import Hero from "../../Components/Hero/Hero";
import Banner from "../../Components/Banner/Banner";

import {Link} from 'react-router-dom'

const Home = () => {


    return (
        <div>
            <Hero hero='defaultHero'>
                <Banner
                    title='luxurious rooms'
                    subtitle='deluxe rooms starting at $299'
                >
                    <Link to='/' className='btn-primary'>our rooms</Link>
                </Banner>
            </Hero>
        </div>
    )
};

export default Home;
