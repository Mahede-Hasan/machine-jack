import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className='mb-20'>
            <h1 className='text-xl font-semibold uppercase pl-14'>Tools by Category</h1>
           <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  px-12 mb-12 mt-4'>
           {
                categories.map(category => <Category
                    key={category.id}
                    category={category}
                ></Category>)
            }
           </div>
        </div>
    );
};

export default Categories;