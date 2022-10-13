import React from 'react';
import Banner from './Banner/Banner';
import Categories from './Category/Categories';
import SupportAndService from './SupportAndService/SupportAndService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SupportAndService></SupportAndService>
            <Categories></Categories>
        </div>
    );
};

export default Home;