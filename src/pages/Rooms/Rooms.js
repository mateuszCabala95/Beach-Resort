import React from 'react';
import Hero from "../../Components/Hero/Hero";
import Banner from "../../Components/Banner/Banner";
import { Link } from 'react-router-dom';

const Rooms = ()=>{

    return(
        <div>
            <Hero hero='roomsHero'>
            <Banner title='our room' >
                <Link  className='btn-primary' to='/'>Return Home </Link>
            </Banner>
            </Hero>
        </div>
    )
};


export default Rooms;