import React from 'react';

const Security = ({security}) => {
    const { img, name, price } = security;
    return (
        <div class="box-container my-4 mx-auto rounded relative w-[220px] h-[340px]">
        <a href='#' class="flex justify-center items-center block relative h-44 rounded overflow-hidden ">
            <img style={{ width: '150px' }} alt="ecommerce" class=" cursor-pointer" src={img} />
        </a>
        
        <div class="mt-4 pl-3">

            <h2 class="text-gray-900 title-font text-md font-medium">{name}</h2>
            <p class="mt-1 text-sm">${price}</p>
            <p className='text-sm'>Available Quantity:</p>
        </div>
        <span><div className="rating pl-3 w-20">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        </div></span>
        <button className='buy-now-btn absolute bottom-0 block align-self-end rounded-b-md text-center text-sm py-1 text-white bg-primary w-full px-auto hover:bg-white cursor-pointer border hover:border-primary hover:text-primary'>Buy Now</button>
    </div>
    );
};

export default Security;