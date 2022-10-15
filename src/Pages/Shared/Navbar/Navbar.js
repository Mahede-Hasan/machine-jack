import { faCartShopping, faUser, faHeart, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import { signOut } from 'firebase/auth';
import powerTools from '../../../images/Categories/power-tools.jpg';
import handTools from '../../../images/Categories/hand-tools.jpg';
import blower from '../../../images/Categories/blower.jpg';
import grinder from '../../../images/Categories/grinder.jpg';
import compressor from '../../../images/Categories/air-compressor.jpg';
import security from '../../../images/Categories/safety-security.jpg';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        console.log(user)
    }

    const logOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <div className="navbar bg-base-100 py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        </ul>
                    </div>
                    <Link className='logo text-primary pl-4' to='/home'>
                        Machine<span className='text-black'>Jack</span></Link>
                </div>
                <div className="navbar-center">

                    <div className="input-group">
                        <input type="text" placeholder="Find your product" className="search-input border border-1 border-orange-400 border-r-0 pl-12 pr-28  outline-none" />
                        <button className="search-btn px-8 py-3 border  border-1 border-orange-400 bg-orange-400 text-white font-semibold hover:bg-white hover:text-orange-400">
                            Search
                        </button>
                    </div>

                </div>
                <div className="navbar-end pr-4">
                    <div className='flex flex-col justify-center items-center pb-2 mr-4 cursor-pointer'>
                        <span><FontAwesomeIcon icon={faHeart} /></span>
                        <p className='text-gray-400 text-sm'>Favorite</p>
                    </div>
                    <div className='flex flex-col justify-center items-center pb-2 mr-4 cursor-pointer'>
                        <span><FontAwesomeIcon icon={faCartShopping} /></span>
                        <p className='text-gray-400 text-sm'>Cart</p>

                    </div>
                    <div className='flex flex-col justify-center items-center pb-2 mr-4 cursor-pointer'>
                        <span><FontAwesomeIcon icon={faUser} /></span>
                        <p className='text-gray-400 text-sm'>Account</p>
                    </div>
                </div>
            </div>

            {/* second navbar */}

            <div className="navbar bg-gray-700 py-0">

                <div className="navbar-start hidden lg:flex pl-10">
                    <ul className="menu menu-horizontal p-0 flex items-center text-white">
                        <li className='bg-primary py-2' tabIndex={0}>

                            <a className='text-white text-xl  all-category'>
                                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                                ALL CATEGORIES
                            </a>
                            <ul className="bg-white pl-2 text-black dropdown">
                                <div className='dropdown-container flex items-center pl-4 cursor-pointer'>
                                    <img style={{width:'30px', height:'22px'}} src={powerTools} alt="" />
                                <Link className='pl-2 hover:bg-none py-2 hover:bg-slate-100' to='/allPowerTools'>Power Tools</Link>
                                </div>
                                <div className="divider my-0"></div>
                                <div className='dropdown-container flex items-center pl-4 cursor-pointer'>
                                    <img style={{width:'30px', height:'22px'}} src={handTools} alt="" />
                                <Link className='pl-2  py-2 hover:bg-slate-100' to='/allHandTools'>Hand Tools</Link>
                                </div>
                                <div className="divider my-0"></div>
                                <div className='dropdown-container flex items-center pl-4 cursor-pointer'>
                                    <img style={{width:'30px', height:'22px'}} src={blower} alt="" />
                                <Link className='pl-2  py-2 hover:bg-slate-100' to='/blowers'>Blower</Link>
                                </div>
                                <div className="divider my-0"></div>
                                <div className='dropdown-container flex items-center pl-4 cursor-pointer'>
                                    <img style={{width:'30px', height:'22px'}} src={grinder} alt="" />
                                <Link className='pl-2  py-2 hover:bg-slate-100' to='/allGrinders'>Grinding</Link>
                                </div>
                                <div className="divider my-0"></div>
                                <div className='dropdown-container flex items-center pl-4 cursor-pointer'>
                                    <img style={{width:'30px', height:'22px'}} src={compressor} alt="" />
                                <Link className='pl-2  py-2 hover:bg-slate-100' to='/allCompressor'>Compressor</Link>
                                </div>
                                <div className="divider my-0"></div>
                                <div className='dropdown-container flex items-center pl-4 cursor-pointer'>
                                    <img style={{width:'30px', height:'22px'}} src={security} alt="" />
                                <Link className='pl-2  py-2 hover:bg-slate-100' to='/allSecurities'>Safety & Security</Link>
                                </div>
                                
                            </ul>
                        </li>
                        <div className='ml-4'>
                            <Link className='px-4 font-semibold hover:text-primary' to='/home'>Home</Link>
                            <Link className='px-4 font-semibold text-bold hover:text-primary' to='/shop'>Shop</Link>
                            <Link className='px-4 font-semibold text-bold hover:text-primary' to='/blogs'>Blogs</Link>
                        </div>
                    </ul>
                </div>
                <div className="navbar-end text-gray-100 pr-12">
                    {user ?
                        <Link onClick={logOut} className='pr-4 font-semibold text-bold hover:text-primary' to='/home'>LogOut</Link>
                        :
                        <>
                            <Link className='pr-4 font-semibold text-bold hover:text-primary' to='/login'>Login</Link>
                            <Link className=' font-semibold text-bold hover:text-primary' to='/register'>Register</Link>
                        </>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;