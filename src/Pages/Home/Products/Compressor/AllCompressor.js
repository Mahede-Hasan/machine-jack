import React from 'react';
import useCompressor from '../../../../hooks/useCompressor';

const AllCompressor = () => {
    const [compressors] = useCompressor();
    return (
        <div>
            <h1 className='py-4 text-3xl font-semibold pl-12 pt-12'>All Grinding Machine</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5  lg-grid-cols-5 gap-5 mx-12'>

                {

                    compressors.map(compressor =>
                        <div class="box-container rounded-md mt-6 mb-12 relative w-[220px] h-[340px]">
                            <a href='#' class="flex justify-center items-center block relative h-44 rounded overflow-hidden ">
                                <img style={{ width: '150px' }} alt="ecommerce" class=" cursor-pointer" src={compressor.img} />
                            </a>

                            <div class="mt-4 pl-3">

                                <h2 class="text-gray-900 title-font text-md font-medium">{compressor.name}</h2>
                                <p class="mt-1 text-sm">${compressor.price}</p>
                                <p className='text-sm'>Available Quantity:</p>
                            </div>
                            <span><div className="rating pl-3 w-20">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div></span>
                            <label className='rounded-b-md absolute bottom-0 block text-center text-sm py-1 text-white bg-primary w-full px-auto hover:bg-white cursor-pointer border hover:border-primary hover:text-primary'>Buy Now</label>
                        </div>

                    )
                }

            </div>
        </div>
    );
};

export default AllCompressor;