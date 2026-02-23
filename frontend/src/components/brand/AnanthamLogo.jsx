import React from 'react';
import whiteLogo from '../../assets/logo/transparentlogowhite.png';
import blackLogo from '../../assets/logo/transparentlogoblack.png';

const AnanthamLogo = ({ className = "h-8 w-auto", variant = "white" }) => {
    const logoImg = variant === "black" ? blackLogo : whiteLogo;

    return (
        <img
            src={logoImg}
            alt="Anantham"
            className={`object-contain ${className}`}
        />
    );
};

export default AnanthamLogo;
