import React from 'react';
import Blowers from './Products/Blowers/Blowers';
import Banner from './Banner/Banner';
import Categories from './Category/Categories';
import Contact from './Contact/Contact';
import HandTools from './Products/HandTools/HandTools';
import PowerTools from './Products/PowerTools/PowerTools';
import SupportAndService from './SupportAndService/SupportAndService';
import Grinders from './Products/Grinder/Grinders';
import Compressors from './Products/Compressor/Compressors';
import Securities from './Products/Security/Securities';
import Stat from './Stat/Stat';
import Offer from './Offer/Offer';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <SupportAndService></SupportAndService>
            <Categories></Categories>
            <PowerTools></PowerTools>
            <HandTools></HandTools>
            <Blowers></Blowers>
            <Grinders></Grinders>
            <Compressors></Compressors>
            <Securities></Securities>
            <Offer></Offer>
            <Stat></Stat>
            <Contact></Contact>
        </div>
    );
};

export default Home;