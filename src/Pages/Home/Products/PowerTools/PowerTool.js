import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PowerTool.css'
import usePowerTools from '../../../../hooks/usePowerTools';
import { CartContext } from '../../../Shared/UserContext/UserContext';

const PowerTool = ({ powerTool }) => {
    const { img, name, price, _id } = powerTool;
    const [tools, setTools] = useContext(CartContext);
    const [powerTools] = usePowerTools()
    const navigate = useNavigate()
    const handleAddToCart = id => {
        const rest = powerTools.find(tools => tools._id === id)

        setTools([...tools, rest])
        navigate(`/powertool/${id}`)
    }
    return (
        <div>
            <div class="box-container relative my-4 mx-auto rounded-md w-[220px] h-[340px]">
                <a href='#' class="flex justify-center items-center block relative h-44 rounded overflow-hidden ">
                    <img style={{ width: '150px' }} alt="ecommerce" class=" cursor-pointer" src={img} />
                    <div className='img-bg absolute inset-0 bg-hidden  w-full h-full transition duration-500'>
                        <div className="img-icon hidden justify-center pt-[40%]">
                            <Link className='text-white text-xs mr-4 bg-primary  rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-800 transition duration-300'><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></Link>
                            <Link className='text-white text-xs bg-primary opacity-100 rounded-full w-6 h-6 flex items-center justify-center hover:bg-gray-800 transition duration-300'><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></Link>
                        </div>
                    </div>
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
                <button onClick={() => handleAddToCart(_id)} className='buy-now-btn absolute bottom-0 block align-self-end rounded-b-md text-center text-sm py-1 text-white bg-primary w-full px-auto hover:bg-white cursor-pointer border hover:border-primary hover:text-primary'>Add To Cart</button>
            </div>

        </div>
    );
};

export default PowerTool;