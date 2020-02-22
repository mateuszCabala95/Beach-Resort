import React from "react";
import Title from "../Title/Title";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

class Services extends React.Component {
    state = {
        services: [{
            icon: <FaCocktail/>,
            title: 'Free cocktails',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, fuga.'
        }, {
            icon: <FaHiking/>,
            title: 'Endless Hiking',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, fuga.'
        }, {
            icon: <FaShuttleVan/>,
            title: 'Free shuttle Van',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, fuga.'
        }, {
            icon: <FaBeer/>,
            title: 'Free Strongest Beer',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, fuga.'
        }]
    };

services = this.state.services.map((item, index) => (<article key={index} className='service'>
    <span>{item.icon}</span>
    <h6>{item.title}</h6>
    <p>{item.info}</p>
</article>));


    render() {
        return (
            <section className='services'>
                <Title title='Services'/>
                <div className="services-center">
                    {this.services}
                </div>
            </section>
        );
    }

};

export default Services;
