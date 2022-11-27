import React from 'react';
import shop from '../assets/images.png';
import '../styles/headers.css';

const Headers = () => {
    return (
        <div className='header'>
            <div className='header__logo'>
                <h2>Intocode Coding Shopcamp</h2>
            </div>
            <div className='header__basket'>
                <img src={shop} alt="shop" className='img__shop' />
            </div>
        </div>
    );
};

export default Headers;