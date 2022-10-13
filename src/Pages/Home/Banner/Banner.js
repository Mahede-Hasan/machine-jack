import React, { useState } from 'react';
import Banner1 from '../../../images/Banner/Banner1.png'
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner' style={{
            background: `url(${Banner1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '1168px',
            height: '400px',
            margin: '0px 48px'
        }}>
            <p>Welcome to Machine Jack <br /> <a href="https://codepen.io/grohit/">
                <small>We provide best Power tools and Service</small></a>
            </p>
        </div>
    );
};

export default Banner;