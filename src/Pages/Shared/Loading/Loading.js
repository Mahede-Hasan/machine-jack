import React from 'react';
import { SpinnerDotted } from 'spinners-react';

const Loading = () => {
    return (
        <div className='flex justify-center my-44'>
            <SpinnerDotted size={50} thickness={100} speed={100} color="#fc9803" />
        </div>
    );
};

export default Loading;