import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Cart.css'
import { CartContext } from '../../../Shared/UserContext/UserContext';
import SelectedItems from './SelectedItems';

const Cart = () => {
    const { cartId } = useParams()
    const [product, setProduct] = useState({})
    const [tools, setTools] = useContext(CartContext);
console.log(tools)
    useEffect(() => {
        fetch(`http://localhost:5000/powertools/${cartId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [cartId])

    return (
        <div className='cart-container'>
            <div>
                <h3 className='text-center text-2xl mt-6'>Selected All items</h3>
                {
                    tools.map(tool=><SelectedItems tool={tool} key={tool._id}></SelectedItems>
                    
                    )
                }
            </div>
            <div className="calculation bg-slate-100">
                <h2 className='text-lg font-semibold text-center pt-4'>Order Summary</h2>
                <div className='flex pl-2 justify-between pb-2'>
                    <h5 className='text-md'>Name: </h5>
                    <p className='pr-8'>$</p>
                </div>
                <div className='flex pl-2 justify-between pb-2'>
                    <h5 className='text-md'>SubTotal</h5>
                    <p className='pr-8'>$</p>
                </div>
                <div className='flex pl-2 justify-between pb-2'>
                    <h5 className='text-md'>Tax</h5>
                    <p className='pr-8'>$</p>
                </div>
                <div className='flex pl-2 justify-between pb-2'>
                    <h5 className='text-md'>Shipping</h5>
                    <p className='pr-8'>$</p>
                </div>
                <div className='flex pl-2 justify-between pb-2'>
                    <h5 className='text-md'>Total</h5>
                    <p className='pr-8'>$</p>
                </div>
                <button className='bg-primary mx-auto block my-4 px-8 py-1 rounded-sm text-white hover:bg-transparent hover:text-primary border hover:border-primary'>Proceed Checkout</button>
            </div>
        </div>
    );
}

export default Cart;
