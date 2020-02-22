import React from 'react';
import Hero from "../../Components/Hero/Hero";
import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";

import {Link} from 'react-router-dom'

const Home = () => {


    return (
        <React.Fragment>
            <Hero hero='defaultHero'>
                <Banner
                    title='luxurious rooms'
                    subtitle='deluxe rooms starting at $299'
                >
                    <Link to='/rooms' className='btn-primary'>our rooms</Link>
                </Banner>
            </Hero>
            <Services/>
        </React.Fragment>
    )
};

export default Home;
