import React from 'react';
import Hero from "../../Components/Hero/Hero";
import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import FeaturedRoom from "../../Components/FeaturedRoom/FeaturedRoom";
import StyledHero from "../../Components/Hero/StyledHero";
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
            <FeaturedRoom/>
            <StyledHero/>
        </React.Fragment>
    )
};

export default Home;
