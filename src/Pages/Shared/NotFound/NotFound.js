import React from 'react';
import notFound from '../../../images/NotFound/notefound.png'

const NotFound = () => {
    return (
        <div >
            <img className='sm:h-20 md:h-20 w-full' src={notFound} style={{width:'100%', height:'500px'}} alt="" />
        </div>
    );
};

export default NotFound;