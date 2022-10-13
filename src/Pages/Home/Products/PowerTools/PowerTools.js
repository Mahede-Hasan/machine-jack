import React from 'react';
import { useQuery } from 'react-query';
import PowerTool from './PowerTool';

const PowerTools = () => {
    const { isLoading, error, data: powerTools } = useQuery('powerTools', () =>
        fetch('products/powerTools.json').then(res => res.json())
    )

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    console.log(powerTools)
    return (
        <div>
            <h1>Power Tools{powerTools.length}</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg-grid-cols-5'>
            {
                powerTools.map(powerTool => <PowerTool
                    key={powerTool.id}
                    powerTool={powerTool}
                ></PowerTool>)
            }
            </div>
        </div>
    );
};

export default PowerTools;