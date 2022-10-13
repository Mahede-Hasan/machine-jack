import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
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
            <div className="divider"></div>
            <h1 className='py-4 text-3xl font-semibold pl-12'>Power Tools</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5  lg-grid-cols-5 gap-5 mx-12'>

                {
                    
                    powerTools.slice(0,10).map(powerTool => <PowerTool
                        key={powerTool.id}
                        powerTool={powerTool}
                    ></PowerTool>)
                }
              
            </div>
            <div className='text-end pr-12 pt-12'>
              <Link className='text-2xl border border-primary py-1 px-3' to='/allPowerTools'><FontAwesomeIcon className='pr-2' icon={faArrowRight}></FontAwesomeIcon>See All Power Tools</Link>
              </div>
            <div className="divider mt-20"></div>
        </div>
    );
};

export default PowerTools;