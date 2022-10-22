import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import usePowerTools from '../../../../hooks/usePowerTools';

const SelectedItems = ({ tool }) => {
    const [powerTools] = usePowerTools();

    // const handleRemove = id =>{
    //    const proceed = window.confirm('are you sure?')
    //    if(proceed){
    //     const url = `http://localhost:5000/powertools/${id}`
    //     fetch(url, {
    //         method: 'DELETE'
    //     })
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))
    //    }
    // }
    return (
        <div>

            <div className="cart-product flex items-center gap-8 ml-12 my-10">
                <img style={{ width: '150px' }} src={tool.img} alt="" />
                <div>
                    <h1 className='text-2xl font-semibold pb-1'>{tool.name}</h1>
                    <h4 className='text-gray-500 pb-2'>Made in China</h4>
                    <h3 className='text-lg font-semibold'>$ {tool.price}</h3>
                    <h4 className='text-gray-400 text-sm'>2 years service warranty</h4>
                    <h4 className='text-sm text-primary pt-2'>Shipping duration : 3 days</h4>
                </div>
                <button title='Delete'><FontAwesomeIcon className='text-xl pl-12 pb-10 text-red-500' icon={faTrashCan}></FontAwesomeIcon></button>

            </div>
        </div>
    );
};

export default SelectedItems;