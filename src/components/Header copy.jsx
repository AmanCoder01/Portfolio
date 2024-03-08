import React from 'react'
import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar className='border-b-2 w-full  mx-auto py-4 flex items-center justify-between bg-[#F8F7F1]'>
            <div className='flex w-full justify-between items-center'>
                <div className='flex  justify-between items-center'>
                    <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
                        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Aman's</span>
                        Portfolio
                    </Link>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="#" className=' text-lg font-semibold'>
                        SERVICES
                    </Navbar.Link>
                    <Navbar.Link href="#" className=' text-lg font-semibold'>EXPERIENCE</Navbar.Link>
                    <Navbar.Link href="#" className=' text-lg font-semibold'>PROJECTS</Navbar.Link>
                    <Navbar.Link href="#" className=' text-lg font-semibold'>TESTIMONIALS</Navbar.Link>
                    <Navbar.Link href="#" className=' text-lg font-semibold'>+91 90268 49004</Navbar.Link>
                    <Navbar.Link href="#" className=' text-lg font-semibold'></Navbar.Link>
                </Navbar.Collapse>
            </div>

        </Navbar>
    )
}

export default Header
