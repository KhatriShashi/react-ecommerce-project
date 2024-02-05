import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
const Nav = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [isPageToggle, setIsPageToggle] = useState(false);
    return (
        <nav className='flex justify-between items-center bg-white shadow-md px-8 h-20 md:px-12'>

            <div>
                <NavLink to={"/"}>
                    <img src="https://vesoz.myshopify.com/cdn/shop/files/Logo_150x.png?v=1614344133" alt="logo-image" />
                </NavLink>
            </div>

            <div className={`dropdown-menu absolute left-0 bg-white shadow-md w-full flex items-center justify-center md:static md:bg-transparent md:shadow-none ${toggleMenu ? '-top-full' : 'top-[80px]'}`}>

                <ul className='flex flex-col items-center font-medium text-black w-full md:flex-row md:gap-[20px] md:w-auto'>

                    <li className='w-full text-center py-3 shadow-sm md:shadow-none'>
                        <NavLink className="hover:text-green-400" to={"/"}>Home</NavLink>
                    </li>

                    <li className='w-full text-center py-3 shadow-sm md:shadow-none'>
                        <NavLink className="hover:text-green-400" to={"/shop"}>Shop</NavLink>
                    </li>

                    <li className='w-full text-center py-3 shadow-sm md:shadow-none'>
                        <NavLink className="hover:text-green-400" to={"/products"}>Products</NavLink>
                    </li>

                    <li className='w-full text-center py-3 shadow-sm md:shadow-none'>
                        <NavLink className="hover:text-green-400" to={"/blog"}>Blog</NavLink>
                    </li>

                    <li className='w-full shadow-sm flex flex-col items-center justify-center md:shadow-none md:flex-row'>

                        <div className='w-full shadow-sm py-3 md:shadow-none'>
                            <NavLink className="hover:text-green-400 flex justify-center " to={"/pages"}>Pages
                                <IoMdArrowDropdown className='text-2xl ml-1' onClick={() => setIsPageToggle(!isPageToggle)} />
                            </NavLink>
                        </div>

                        <div className={`w-full truncate md:absolute md:w-auto md:px-5 md:shadow-md md:top-[60px] md:bg-white ${isPageToggle ? 'max-h-[120]' : 'max-h-0'}`}>
                            <li className='text-center py-3 shadow-sm md:shadow-none md:py-2'>
                                <NavLink className="hover:text-green-400" to={"/pages/about"}>About Us</NavLink>
                            </li>
                            <li className='text-center py-3 shadow-sm md:shadow-none md:py-2'>
                                <NavLink className="hover:text-green-400" to={"/pages/contact"}>Contact Us</NavLink>
                            </li>
                        </div>
                    </li>

                </ul>
            </div>
            <div className='flex items-center gap-3 relative'>

                <NavLink to={"cart"}>

                    <div className='flex'>
                        <MdOutlineShoppingCart className='text-2xl' />
                        <span className="bg-green-300 text-[12px] font-medium w-5 h-5 rounded-full flex items-center justify-center absolute -top-2 left-3">10</span>
                    </div>

                </NavLink>

                <div className='md:hidden'>
                    <GiHamburgerMenu className='text-3xl' onClick={() => setToggleMenu(!toggleMenu)} />
                </div>

            </div>
        </nav>
    )
}

export default Nav