import { faCartShopping, faUser, faHeart, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import powerTools from '../../../images/Categories/power-tools.jpg';
import handTools from '../../../images/Categories/hand-tools.jpg';
import blower from '../../../images/Categories/blower.jpg';
import grinder from '../../../images/Categories/grinder.jpg';
import compressor from '../../../images/Categories/air-compressor.jpg';
import security from '../../../images/Categories/safety-security.jpg';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const [open, setOpen] = useState(false)

    if (user) {

    }

    const logOut = () => {
        signOut(auth)
    }

    return (
        <div>

            {/* First Navbar  */}
            <div className="navbar w-[100%] bg-base-100 py-2 flex justify-between">
                <div className="navbar start">
                    <Link className='logo block text-primary lg:pl-4 md:pl-2 text-2xl lg:text-4xl md:text-3xl' to='/home'>
                        Machine<span className='text-black'>Jack</span></Link>
                </div>
                <div className="navbar-center  lg:mr-20 md:mr-16 pr-4">
                    <div className="input-group ">
                        <input type="text" placeholder="Find your product" className="search-input border border-1 border-orange-400 border-r-0 lg:pl-12 lg:pr-28 md:pl-6 md:pr-12 pl-2 pr-2 outline-none" />
                        <button className="search-btn lg:px-8 lg:py-3 md:px-4 md:py-1 px-2 py-1  border  border-1 border-orange-400 bg-orange-400 text-white font-semibold hover:bg-white hover:text-orange-400">
                            Search
                        </button>
                    </div>

                </div>
                <div className="navbar-end hidden lg:flex md:flex pr-4 md:pr-2">
                    <div className='flex flex-col justify-center items-center pb-2 mr-4 cursor-pointer'>
                        <span><FontAwesomeIcon icon={faHeart} /></span>
                        <p className='text-gray-400 text-sm'>Favorite</p>
                    </div>
                    <div className='flex flex-col justify-center items-center pb-2 mr-4 cursor-pointer'>

                        <span><FontAwesomeIcon icon={faCartShopping} /></span>

                        <Link to='/cart' className='text-gray-400 text-sm'>Cart</Link>

                    </div>
                    <div className='flex flex-col justify-center items-center pb-2 mr-4 cursor-pointer'>
                        <span><FontAwesomeIcon icon={faUser} /></span>
                        <p className='text-gray-400 text-sm'>Profile</p>
                    </div>
                </div>
            </div>
            {/* First Navbar end  */}

            {/* Second navbar Start*/}
            <div className="navbar  bg-gray-700 py-0 flex items-center">

                <div className="navbar-start grid lg:px-[56px] md:pl-12 pl-6">
                    <ul className="menu menu-horizontal p-0 flex items-center text-white">
                        <li className='bg-primary py-2 flex' tabIndex={0}>

                            <a className=' text-white lg:text-xl md:tex-lg  all-category'>
                                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                                ALL CATEGORIES
                            </a>
                            <ul className="bg-white lg:w-[218px] lg:top-[148px] lg:text-md top-[144px] w-[183px] text-sm text-black dropdown">
                                <div className='dropdown-container  flex items-center px-4 cursor-pointer'>
                                    <img style={{ width: '30px', height: '22px' }} src={powerTools} alt="" />
                                    <Link className='px-2  py-2 hover:bg-slate-100' to='/allPowerTools'>Power Tools</Link>
                                </div>
                                <div className="divider my-0"></div>
                                <div className='dropdown-container flex items-center pl-4 cursor-pointer'>
                                    <img style={{ width: '30px', height: '22px' }} src={handTools} alt="" />
                                    <Link className='pl-2  py-2 hover:bg-slate-100' to='/allHandTools'>Hand Tools</Link>
                                </div>
                                <div className="divider my-0"></div>
                                <div className='dropdown-container flex items-center pl-4 cursor-pointer'>
                                    <img style={{ width: '30px', height: '22px' }} src={blower} alt="" />
                                    <Link className='pl-2  py-2 hover:bg-slate-100' to='/blowers'>Blower</Link>
                                </div>
                                <div className="divider my-0"></div>
                                <div className='dropdown-container flex items-center pl-4 cursor-pointer'>
                                    <img style={{ width: '30px', height: '22px' }} src={grinder} alt="" />
                                    <Link className='pl-2  py-2 hover:bg-slate-100' to='/allGrinders'>Grinding</Link>
                                </div>
                                <div className="divider my-0"></div>
                                <div className='dropdown-container flex items-center pl-4 cursor-pointer'>
                                    <img style={{ width: '30px', height: '22px' }} src={compressor} alt="" />
                                    <Link className='pl-2  py-2 hover:bg-slate-100' to='/allCompressor'>Compressor</Link>
                                </div>
                                <div className="divider my-0"></div>
                                <div className='dropdown-container flex items-center pl-4 cursor-pointer'>
                                    <img style={{ width: '30px', height: '22px' }} src={security} alt="" />
                                    <Link className='pl-2  py-2 hover:bg-slate-100' to='/allSecurities'>Safety & Security</Link>
                                </div>

                            </ul>
                        </li>
                        <div className='ml-4 lg:flex hidden'>
                            <Link className='px-4 font-semibold hover:text-primary transition duration-500' to='/home'>Home</Link>
                            <Link className='px-4 font-semibold text-bold hover:text-primary transition duration-500' to='/shop'>Shop</Link>
                            <Link className='px-4 font-semibold text-bold hover:text-primary transition duration-500' to='/blogs'>Blogs</Link>
                            <Link className=' font-semibold text-bold hover:text-primary transition duration-500' to='/purchase'>Purchase</Link>
                        </div>
                    </ul>
                </div>
                <div className="navbar-end">

                    <div className="lg:flex block list-none text-gray-100 pr-12">

                        {/* Start Responsive nav  */}
                        <ul className={`absolute pt-2 overflow-x-hidden  bg-orange-400 mt-6 ${open ? 'top-[120px]' : 'hidden'}`}>
                            <li><Link className='px-4 lg:hidden font-semibold hover:text-primary transition duration-500' to='/home'>Home</Link></li>
                            <li> <Link className='px-4 lg:hidden font-semibold text-bold hover:text-primary transition duration-500' to='/shop'>Shop</Link></li>
                            <li><Link className='px-4 lg:hidden font-semibold text-bold hover:text-primary transition duration-500' to='/blogs'>Blogs</Link></li>
                            <li><Link className=' font-semibold lg:hidden text-bold hover:text-primary transition duration-500' to='/purchase'>Purchase</Link></li>

                            {user ?
                                <div>
                                    <li><Link className='pr-4 font-semibold text-bold hover:text-primary transition duration-500' to='/addProduct'>Add Product</Link></li>
                                    <li><Link className='pr-4 font-semibold text-bold hover:text-primary transition duration-500' to='/dashboard'>Dashboard</Link></li>
                                    <li><Link onClick={logOut} className='pr-4 font-semibold text-bold hover:text-primary transition duration-500' to='/home'>LogOut</Link></li>
                                </div>
                                :
                                <div>

                                    <li><Link className='pr-4 font-semibold text-bold hover:text-primary transition duration-500' to='/login'>Login</Link></li>
                                    <li><Link className=' font-semibold text-bold hover:text-primary transition duration-500' to='/register'>Register</Link></li>
                                </div>}
                        </ul>
                        {/* End Responsive nav */}

                        <div className="lg:flex hidden">
                            {user ?
                                <div className='flex'>
                                    <li><Link className='pr-4 font-semibold text-bold hover:text-primary transition duration-500' to='/addProduct'>Add Product</Link></li>
                                    <li><Link className='pr-4 font-semibold text-bold hover:text-primary transition duration-500' to='/dashboard'>Dashboard</Link></li>
                                    <li><Link onClick={logOut} className='pr-4 font-semibold text-bold hover:text-primary transition duration-500' to='/home'>LogOut</Link></li>
                                </div>
                                :
                                <div className='flex'>

                                    <li><Link className='pr-4 font-semibold text-bold hover:text-primary transition duration-500' to='/login'>Login</Link></li>
                                    <li><Link className=' font-semibold text-bold hover:text-primary transition duration-500' to='/register'>Register</Link></li>
                                </div>}
                        </div>
                    </div>

                    <div onClick={() => setOpen(!open)} className="w-6 h-6 block lg:hidden text-white mr-8">
                        {open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
                    </div>
                </div>
            </div>
            {/* End Second Navbar  */}

        </div>
    );
};

export default Navbar;