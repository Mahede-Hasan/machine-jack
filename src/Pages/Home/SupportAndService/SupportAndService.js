import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar, faTruckFast, faUserClock } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import './SupportAndService.css';

const SupportAndService = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-20'>
            <div className=" flex justify-center items-center my-4 py-7 h-32 w-[90%] bg-base-100 border border-primary mx-2 hover:shadow-lg cursor-pointer hover:rounded-md">
                <div className='pr-4'>
                    <FontAwesomeIcon className='text-primary text-5xl' icon={faTruckFast}></FontAwesomeIcon>
                </div>
                <div>
                    <h3 className='text-lg font-semibold'>Free Shipping</h3>
                    <p className='text-sm font-semibold text-gray-400'>Order over $100</p>
                </div>
            </div>

            <div className=" flex justify-center items-center my-4 py-7 h-32 w-[90%] bg-base-100 border border-primary mx-2 hover:shadow-lg cursor-pointer hover:rounded-md">
                <div className='pr-4'>
                    <FontAwesomeIcon className='text-primary text-5xl' icon={faHandHoldingDollar}></FontAwesomeIcon>
                </div>
                <div>
                    <h3 className='text-lg font-semibold'>Money Returns</h3>
                    <p className='text-sm font-semibold text-gray-400'>10 Days Money Return</p>
                </div>
            </div>

            <div className=" flex justify-center items-center my-2 py-7 h-32 w-[90%] bg-base-100 border border-primary mx-2 hover:shadow-lg cursor-pointer hover:rounded-md">
                <div className='pr-4'>
                    <FontAwesomeIcon className='text-primary text-5xl' icon={faUserClock}></FontAwesomeIcon>
                </div>
                <div>
                    <h3 className='text-lg font-semibold'>24/7 Support</h3>
                    <p className='text-sm font-semibold text-gray-400'>Customer Support</p>
                </div>
            </div>


        </div>

    );
};

export default SupportAndService;