"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import './/Navbar.scss'
import Logo from '../img/logo.png'
import Link from 'next/link'

function Navbar() {

    const [showSidebar, setShowSidebar] = useState(true)
    function handleClick() {
        setShowSidebar(showSidebar => !showSidebar)
    }

    return (
        <>

            {/* TOP NAVBAR */}
            <header className='navbar'>
                <section className='navbar-top py-2 bg-[#f9f9f9] text-sm text-[#8f8f8f] hidden lg:block'>
                    <div className="container mx-auto flex flex-wrap justify-between px-5">

                        <div className='flex flex-wrap gap-3'>
                            <div><p className='m-0 p-0 uppercase font-medium text-black'>Follow Us:</p></div>
                            <ul className='p-0 m-0 flex flex-wrap gap-3 text-black'>
                                <li><i className="ri-facebook-line"></i></li>
                                <li><i className="ri-twitter-x-line"></i></li>
                                <li><i className="ri-instagram-line"></i></li>
                            </ul>
                        </div>
                        <div>
                            <ul className='p-0 m-0 flex flex-wrap gap-7 '>
                                <li><i className="ri-time-line"></i> Mon-Sat 8:00 - 18:00</li>
                                <li><i className="ri-smartphone-line"></i> 0800 123 4567</li>
                                <li><i className="ri-send-plane-fill"></i> eco@example.com</li>
                                <li><i className="ri-map-pin-line"></i> 7 Oakmound Drive, Chicago, IL 60606</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </header>
            {/* NAVBAR WITH SCROLL ANIMATION */}
            <section className="navbar-main py-6 px-5 bg-[#ffffff] sticky top-0 shadow">
                <div className="container mx-auto flex flex-wrap items-center justify-between">
                    <div>
                        <Link href="/"><Image priority src={Logo} alt='logo' width={0} height={0} className='object-cover w-[120px] sm:w-full'></Image></Link>
                    </div>

                    <div className='nav-item-mid hidden lg:block'>
                        <ul className='flex flex-wrap gap-14 p-0 m-0 uppercase text-sm font-semibold text-black'>
                            <li><Link href="/" className='p-0 m-0'>Home</Link></li>
                            <li><Link href="/about" className='p-0 m-0'>About</Link></li>
                            <li><Link href="/" className='p-0 m-0'>Services</Link></li>
                            <li><Link href="/" className='p-0 m-0'>Blog</Link></li>
                            <li><Link href="/" className='p-0 m-0'>Contact</Link></li>
                        </ul>
                    </div>

                    <div className='nav-item-btn flex items-center gap-5 flex-wrap'>
                        <div className='hidden sm:block'>
                            <Link href="/contact" className='uppercase py-4 px-6 bg-[#27D2A3] font-medium '>Request A Quote</Link>
                        </div>
                        <div className='block lg:hidden'>
                            <i className="ri-menu-2-line text-3xl cursor-pointer" onClick={handleClick}></i>
                        </div>
                    </div>
                </div>

            </section>
            <div className={showSidebar ? 'hidden' : 'block '}>
                <div className="sidebar flex flex-col justify-start ps-5 pt-10 items-center md:items-start text-center md:text-start h-[100dvh] md:w-[350px] w-[100%] shadow-black shadow-sm bg-[#ffffff36] fixed top-0 right-0 z-[99999] backdrop-blur-md ">

                    <div className='flex justify-between w-[100%] items-center px-3'>
                        <Link href="/"><Image src={Logo} width={0} height={0} alt='logo' className='w-[120px]'></Image></Link>
                        <i className="ri-close-line text-3xl cursor-pointer" onClick={handleClick}></i>
                    </div>
                    <ul className='p-0 m-0 flex flex-col gap-7 mt-[50px] uppercase text-xl font-semibold text-black'>
                        <li><Link href="/" className='p-0 m-0'>Home</Link></li>
                        <li><Link href="/about" className='p-0 m-0'>About</Link></li>
                        <li><Link href="/" className='p-0 m-0'>Services</Link></li>
                        <li><Link href="/" className='p-0 m-0'>Blog</Link></li>
                        <li><Link href="/" className='p-0 m-0'>Contact</Link></li>
                    </ul>

                </div>
            </div>


        </>
    )
}



export default Navbar