import React from 'react'
import './Footer.scss'
import Link from 'next/link'
import Image from 'next/image'
import texture from '../img/texture.png'
import text1 from '../img/text1.png'


function Footer() {
    return (
        <>
            <footer className='py-5'>
                <div className="container mx-auto max-w-[1200px] flex lg:flex-row flex-col gap-10 px-5">
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
                </div>

                <section className='py-24'>
                    <div className="footer-report">
                        <div className="container mx-auto max-w-[1200px]  flex flex-col lg:flex-row justify-evenly items-center gap-8">

                            <div className="circle-con text-center relative lg:w-1/4 w-[50%] ">
                                <h3 className='stroke-text'>6K</h3>
                                <div className='img-con absolute top-[50%] translate-y-[-70%] left-[50%] translate-x-[-50%]'>
                                    <Image src={text1} width={0} height={0} className='' alt='image' ></Image>
                                </div>
                                <p className='text-[16px] font-semibold uppercase text-[#2D3545] '>COMPLETED</p>
                                <p className='font-bold text-3xl text-[#2D3545]'>PROJECTS</p>
                            </div>

                            <div className="circle-con text-center relative lg:w-1/4 w-[50%]">
                                <h3 className='stroke-text'>4K</h3>
                                <div className='img-con absolute top-[50%] translate-y-[-70%] left-[50%] translate-x-[-50%]'>
                                    <Image src={text1} width={0} height={0} className='' alt='img' ></Image>
                                </div>
                                <p className='text-[16px] font-semibold uppercase text-[#2D3545]'>SATISFIED</p>
                                <p className='font-bold text-3xl text-[#2D3545] uppercase'>Customers</p>
                            </div>

                            <div className="circle-con text-center relative lg:w-1/4 w-[50%]">
                                <h3 className='stroke-text'>18</h3>
                                <div className='img-con absolute top-[50%] translate-y-[-70%] left-[50%] translate-x-[-50%]'>
                                    <Image src={text1} width={0} height={0} className='' alt='img' ></Image>
                                </div>
                                <p className='text-[16px] font-semibold uppercase text-[#2D3545]'>EARNED</p>
                                <p className='font-bold text-3xl text-[#2D3545] tracking-widest'>AWARDS</p>
                            </div>

                            <div className="circle-con text-center relative lg:w-1/4 w-[50%]">
                                <h3 className='stroke-text'>25</h3>
                                <div className='img-con absolute top-[50%] translate-y-[-70%] left-[50%] translate-x-[-50%]'>
                                    <Image src={text1} width={0} height={0} className='' alt='img'></Image>
                                </div>
                                <p className='text-[16px] font-semibold uppercase text-[#2D3545]'>Years</p>
                                <p className='font-bold text-3xl text-[#2D3545] uppercase'>Experience</p>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="links flex">
                    <div className='w-1/2 bg-[#28303E] py-10'>

                    </div>

                    <div className='w-1/2 bg-[#2D3545] py-10'>

                    </div>
                </section>
{/* 
comment */}
            </footer>
            <section className="bottom-part text-center py-5 bg-white text-black shadow-sm align-middle">
                Copyright © 2021 All Rights Reserved
            </section>
        </>
    )
}

export default Footer