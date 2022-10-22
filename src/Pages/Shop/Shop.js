import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import AllProducts from './AllProducts';

const Shop = () => {
  const { data: toolsProducts, isLoading, error } = useQuery('products', () => fetch('http://localhost:5000/products').then(res => res.json()))

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <h1 className='py-4 text-3xl font-semibold text-center'>All Product</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-5 xl:grid-cols-5 gap-5 mx-12">
        {
          toolsProducts.map(product => <AllProducts key={toolsProducts._id} product={product}></AllProducts>)
        }
      </div>
    </div>
  );
};

export default Shop;