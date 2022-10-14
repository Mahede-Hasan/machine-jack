import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useBlower from '../../../../hooks/useBlower';
import Blower from './Blower';

const Blowers = () => {
    const [blowers] = useBlower()
    return (
        <div>
            <h1 className='py-4 text-3xl font-semibold pl-12'>Blower Tools</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-5 mx-12'>

                {

                    blowers.slice(0, 10).map(blower => <Blower
                        key={blower.id}
                        blower={blower}
                    ></Blower>)
                }

            </div>
            <div className='text-end pr-12 pt-12'>
                <Link className='text-md border border-primary py-1 px-3' to='/blowers'><FontAwesomeIcon className='pr-2' icon={faArrowRight}></FontAwesomeIcon>See All Blowers</Link>
            </div>
            <div className="divider mt-10"></div>
        </div>
    );
};

export default Blowers;