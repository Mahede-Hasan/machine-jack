import React from 'react';

const PowerTool = ({ powerTool }) => {
    const { img, name, price } = powerTool;
    return (
        <div>


            <div class="">
                <a class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="" src={img} />
                </a>
                <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Power Tools</h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">{name}</h2>
                    <p class="mt-1">${price}</p>
                </div>
                <span><div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </div></span>
            </div>

        </div>
    );
};

export default PowerTool;