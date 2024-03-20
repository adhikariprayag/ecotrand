import React from 'react'
import './Footer.scss'
import Link from 'next/link'
import Image from 'next/image'
import text1 from '../img/text1.png'
import 'remixicon/fonts/remixicon.css'


function Footer() {
    return (
        <>
            <footer className='py-5'>
                {/* <div className="container mx-auto max-w-[1200px] flex lg:flex-row flex-col gap-10 px-5">
                    <div className='lg:w-[50%]  space-y-4'>
                        <p className=' font-semibold py-4'>CONTACTS</p>
                        <h5 className='font-bold text-xl p-0 m-0'>1116 15th St, Sacramento, California, CA 95814, USA</h5>
                        <h5 className='font-bold text-xl p-0 m-0'>0800 123 4567, 0800 123 4566</h5>
                        <h5 className='font-bold text-xl p-0 m-0'>ecotrand@support.com, ecotrand@info.com</h5>
                    </div>
                    <div className='lg:w-[50%] '>
                        <div>
                            <form action="" className='flex gap-3 md:flex-row flex-col'>
                                <div className="flex flex-col">
                                    <input type="text" placeholder='Full Name' />
                                    <input type="text" placeholder='Email Address' />
                                    <div>
                                        <input type="checkbox" /> I agree with the terms of the Service Agreement and I accept Privacy Policy
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <input type="text" placeholder='Your Message' />
                                    <div className='nav-item-btn'>
                                        <Link href="/contact" className='uppercase py-2 px-8 tracking-widest bg-white font-light border-black border'>Send Message</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> */}

                <section className='lg:pb-[190px]'>
                    <div className="footer-report">
                        <div className="container mx-auto max-w-[1200px]  flex flex-col lg:flex-row justify-evenly items-center gap-8 pb-20">

                            <div className="circle-con text-center lg:w-1/4 w-[50%] ">
                                <div className='relative'>
                                    <h3 className='stroke-text'>6K</h3>
                                    <div className='img-con absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] hidden md:block'>
                                        <Image src={text1} width={0} height={0} alt='image' ></Image>
                                    </div>
                                </div>


                                <p className='text-[16px] font-semibold uppercase text-[#2D3545] '>COMPLETED</p>
                                <p className='font-bold sm:text-3xl text-[16px] text-[#2D3545] '>PROJECTS</p>
                            </div>

                            <div className="circle-con text-center lg:w-1/4 w-[50%]">
                                <div className='relative'>
                                    <h3 className='stroke-text'>4K</h3>
                                    <div className='img-con absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] hidden md:block'>
                                        <Image src={text1} width={0} height={0} alt='image' ></Image>
                                    </div>
                                </div>
                                <p className='text-[16px] font-semibold uppercase text-[#2D3545]'>SATISFIED</p>
                                <p className='font-bold sm:text-3xl text-[16px] text-[#2D3545] uppercase'>Customers</p>
                            </div>

                            <div className="circle-con text-center lg:w-1/4 w-[50%]">
                                <div className='relative'>
                                    <h3 className='stroke-text'>18</h3>
                                    <div className='img-con absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] hidden md:block'>
                                        <Image src={text1} width={0} height={0} alt='image' ></Image>
                                    </div>
                                </div>
                                <p className='text-[16px] font-semibold uppercase text-[#2D3545]'>EARNED</p>
                                <p className='font-bold sm:text-3xl text-[16px] text-[#2D3545] tracking-widest'>AWARDS</p>
                            </div>

                            <div className="circle-con text-center lg:w-1/4 w-[50%]">
                                <div className='relative'>
                                    <h3 className='stroke-text'>25</h3>
                                    <div className='img-con absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] hidden md:block'>
                                        <Image src={text1} width={0} height={0} alt='image' ></Image>
                                    </div>
                                </div>
                                <p className='text-[16px] font-semibold uppercase text-[#2D3545]'>Years</p>
                                <p className='font-bold sm:text-3xl text-[16px] text-[#2D3545] uppercase'>Experience</p>
                            </div>

                        </div>
                    </div>
                </section>

                <div className='relative'>
                    <section className="breadcrumb lg:absolute z-20 lg:top-[-50%]  lg:translate-y-[50%] w-full py-16 lg:py-0 px-5">
                        <div className="breadcrumb-con container mx-auto max-w-[1300px] bg-[#27D3A3] py-16 sm:px-24 px-5 flex flex-wrap z-10 justify-between items-center relative">
                            <div>
                                <h2 className='text-white font-bold text-xl sm:text-4xl w-[60%]'>Still have any questions? <span className='text-[#2D3545]'>Get a free consultancy!</span></h2>
                                <p className='py-3'>You can contact us through phone: 0800 123 4567 or email: ecotrand@support.com</p>
                            </div>
                            <div>
                                <h2 className='text-stroke text-[200px] font-bold absolute top-[0%] right-10 z-[-1] hidden sm:block'>24/7</h2>
                                <div className='nav-item-btn '>
                                    <Link href="/contact" className='uppercase md:py-4 md:px-6 py-4 px-2 bg-[white] font-light '>Request A Quote</Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="links-section lg:flex text-white md:relative ">
                        <div className='lg:w-1/2 w-full bg-[#28303E] md:py-48 py-32 px-10 '>

                            <div className=" flex md:justify-evenly flex-col md:flex-row justify-center ">
                                <ul className='text-[#7E8694]'>
                                    <li className='text-white pb-5 font-semibold uppercase'>Useful Link</li>
                                    <li><a href="">Wind Turbines</a></li>
                                    <li><a href="">Solar Panels</a></li>
                                    <li><a href="">Hydropower Plants</a></li>
                                    <li><a href="">Fossil Resources</a></li>
                                </ul>

                                <ul className='text-[#7E8694] '>
                                    <li className='text-white pb-5 font-semibold uppercase'>Support</li>
                                    <li><a href="">Terms & Conditions</a></li>
                                    <li><a href="">Shipping Policy</a></li>
                                    <li><a href="">Delivery Tips</a></li>
                                    <li><a href="">Returns</a></li>
                                </ul>

                                <ul className='text-[#7E8694]'>
                                    <li className='text-white pb-5 font-semibold uppercase'>Company</li>
                                    <li><a href="">About us</a></li>
                                    <li><a href="">Our gallery</a></li>
                                    <li><a href="">Our cases</a></li>
                                    <li><a href="">News & events</a></li>
                                </ul>
                            </div>

                        </div>

                        <div className='lg:w-1/2 w-full bg-[#2D3545] py-32 flex justify-center items-center'>
                            <ul className='text-[#7E8694] w-full newsletter-box px-28'>
                                <li className='text-white pb-5 font-semibold uppercase'>NEWSLETTER</li>
                                <li className='flex sm:flex-nowrap flex-wrap'>
                                    <div className='w-full'>
                                        <input type="email" name="email" id="email" placeholder='Email Address' className='bg-transparent w-full outline-none ' />
                                        <div className='border-animate'></div>
                                    </div>

                                    <button type="submit"><i className="ri-pencil-line text-white text-xl"></i></button>
                                </li>

                                <div className="flex flex-wrap footer-icons gap-10 justify-center text-white">
                                    <li><a href=""><i className="ri-facebook-line"></i></a></li>
                                    <li><a href=""><i className="ri-linkedin-fill"></i></a></li>
                                    <li><a href=""><i className="ri-twitter-fill"></i></a></li>
                                </div>

                            </ul>
                        </div>
                    </section>
                </div>
            </footer>

            <section className="bottom-part text-center py-5 bg-white text-black shadow-sm align-middle">
                Copyright © 2021 All Rights Reserved
            </section>
        </>
    )
}

export default Footer