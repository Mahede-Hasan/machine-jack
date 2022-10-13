import React from 'react';
import './Category.css'

const Category = ({ category }) => {
    const { name, img } = category;
    return (
        <div className='mx-auto'>
            <div className="card w-44 h-32 my-2 image-full cursor-pointer">
                <figure><img src={img} alt="categoryImage" /></figure>
                <div className="card-body flex justify-center items-center">
                    <h2 className="card-title text-white text-sm">{name}</h2>
                   
                </div>
            </div>
        </div>
    );
};

export default Category;