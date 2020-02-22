import React from "react";
import Hero from "../../Components/Hero/Hero";
import Banner from "../../Components/Banner/Banner";
import {Link} from 'react-router-dom';

const Error = () => {


    return (
        <div>
            <Hero>
                <Banner title='404' subtitle='page not found'>
                    <Link className='btn-primary' to='/'>Return to home</Link>
                </Banner>

            </Hero>
        </div>
    )
};

export default Error;