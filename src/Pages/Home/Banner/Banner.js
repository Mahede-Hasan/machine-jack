import React, { useState } from 'react';
import Banner1 from '../../../images/Banner/Banner1.png'
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner mx-auto lg:h-[400px] md:h-[350px] sm:h-[300px]' style={{
            background: `url(${Banner1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '90%',
            margin: '0px auto'
        }}>
            <p><span className='lg:text-[44px] text-[30px]'>Welcome to Machine Jack</span> <br /> <a href="https://codepen.io/grohit/">
                <small className='lg:text-[18px] text-[10px] '>We provide best Power tools and Service</small></a>
            </p>
        </div>
    );
};

export default Banner;