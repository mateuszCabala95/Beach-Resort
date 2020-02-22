import React from "react";

const Hero = ({children, hero}) => {
    //set background image

    return (
        <header className={hero}>
            {children}
        </header>
    )
};

Hero.defaultProps = {
    hero: 'defaultHero'
};

export default Hero