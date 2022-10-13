import React from 'react';
import Banner from './Banner/Banner';
import Categories from './Category/Categories';
import Contact from './Contact/Contact';
import PowerTools from './Products/PowerTools/PowerTools';
import SupportAndService from './SupportAndService/SupportAndService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SupportAndService></SupportAndService>
            <Categories></Categories>
            <PowerTools></PowerTools>
            <Contact></Contact>
        </div>
    );
};

export default Home;