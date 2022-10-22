import React from 'react';
import { SpinnerRoundOutlined } from 'spinners-react';

const Loading = () => {
    return (
        <div className='flex justify-center my-44'>
      
            <SpinnerRoundOutlined size={50} thickness={100} speed={100} color="#fc9803" />
        </div>
    );
};

export default Loading;