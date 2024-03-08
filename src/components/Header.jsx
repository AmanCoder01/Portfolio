import React, { useState } from 'react'
import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
    const [toggle, setToggle] = useState(false);

    function handleClick() {
        setToggle(!toggle)
    };

    return (
        <div className='border-b-2 w-full mx-auto py-5 bg-[#F8F7F1] px-4 fixed top-0'>
            <div className='flex w-full md:w-10/12 mx-auto justify-between items-center relative'>
                <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Aman's</span>
                    Portfolio
                </Link>

                <div className={toggle ? `text-lg font-semibold gap-6  flex md:hidden flex-col mt-5 absolute top-5 right-[-15px] bg-[#F8F7F1] px-8 py-4 rounded-sm border transition-all duration-500` : `text-lg font-semibold hidden items-center gap-6 md:flex`}>
                    <a href="" className='hover:text-indigo-600'>SERVICES</a>
                    <a href="" className='hover:text-indigo-600'>EXPERIENCE</a>
                    <a href="#project" className='hover:text-indigo-600'>PROJECTS</a>
                    <a href="" className='hover:text-indigo-600'>TESTIMONIALS</a>
                    <a href="" className='hover:text-indigo-600'>+91 90268 49004</a>
                    <a href="tel:+919026849004" className='hover:text-indigo-600'><FaPhoneAlt /></a>
                </div>

                <GiHamburgerMenu size={20} className='inline md:hidden cursor-pointer' onClick={handleClick} />
            </div>
            {/* {toggle && <div className='text-lg font-semibold gap-6  flex md:hidden flex-col mt-5'>
                <a href="" className='hover:text-indigo-600 border-b-2'>SERVICES</a>
                <a href="" className='hover:text-indigo-600 border-b-2'>EXPERIENCE</a>
                <a href="" className='hover:text-indigo-600  border-b-2'>PROJECTS</a>
                <a href="" className='hover:text-indigo-600 border-b-2'>TESTIMONIALS</a>
                <a href="" className='hover:text-indigo-600 border-b-2'>+91 90268 49004</a>
                <a href="tel:+919026849004" className='hover:text-indigo-600'><FaPhoneAlt /></a>
            </div>} */}

        </div>
    )
}

export default Header
