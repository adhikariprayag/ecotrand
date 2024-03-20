"use client"
import React from 'react';
import './about.scss'
import Link from 'next/link';
import Image from 'next/image';
import man1 from '../../img/quote-1.png'
import sign from '../../img/signature.png'

import b1 from '../../img/13.jpg'
import b2 from '../../img/12.jpg'
import b3 from '../../img/11.jpg'
import b4 from '../../img/10.jpg'

import abtlf from '../../img/abtlf.png'
import bgv from '../../img/33.jpg'
import 'remixicon/fonts/remixicon.css';

//persons
import p1 from '../../img/p1.jpg'
import p2 from '../../img/p2.jpg'
import p3 from '../../img/p3.jpg'
import p4 from '../../img/p4.jpg'
import p5 from '../../img/p5.jpg'
import p6 from '../../img/p6.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css/effect-fade';

function About() {
  return (
    <>

      <section className="about-page ">
        <div className="bg-container py-48 flex flex-col justify-center items-center">
          <h2 className='text-white sm:text-7xl text-5xl font-bold  text-stroke'>About Us</h2>
          <p className='py-5 text-white'>
            <Link href="/" className='text-white hover:text-gray-800'>Home </Link>
            / Pages /
            <Link href="/about" className='text-gray-800'> About US</Link>
          </p>

        </div>

        <div className="about-main py-40">
          <div className="container mx-auto max-w-[1400px] px-10 md:flex">
            <div className='md:w-1/2 w-full'>
              <h2 className='relative'>
                <span className='text-black text-7xl sm:text-9xl font-bold text-stroke-black back-text'>Hey!</span>
                <span className='text-[#2D3545] text-4xl sm:text-7xl font-bold front-text'>We’re building a better future</span>
              </h2>
            </div>
            <div className='md:w-1/2 w-full mt-5 md:mt-0'>
              <p>
                <span className='text-black'>We’re among the world’s leading renewable energy solutions providers that is revolutionising and redefining the way sustainable energy sources are harnessed across the world.</span>
                <br /> <br />
                <span className="text-gray-500">Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
                  <br /> <br />
                  Auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec rutrum congue leo eget malesuada. Curabitur aliquet quam id dui posuere blandit curabitur arcu erat.</span>
              </p>

              <div className='flex gap-10 mt-10 items-center flex-wrap sm:flex-nowrap'>

                <div>
                  <Image src={man1} width={0} height={0} alt='a man'></Image>
                </div>
                <div className='flex flex-col gap-3'>
                  <h5 className='text-black font-semibold'>John A Soul</h5>
                  <p className='text-gray-500 uppercase text-sm'>Founder</p>
                </div>

                <div>
                  <Image src={sign} width={0} height={0} alt='signature'></Image>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="boxes py-10 flex flex-wrap relative ">

          <div className='box box-1 lg:w-1/4 md:w-1/2 w-full h-[320px] flex justify-center items-center flex-col relative'>
            <Image src={b1} width={0} height={0} alt='background' className='h-[320px] w-full object-cover '></Image>
            <i className="ri-fire-line text-[54px] absolute top-[30%] text-white"></i>
            <p className='text-[54px] font-extrabold absolute top-[50%] text-stroke sfill'>BIO</p>
            <h5 className='text-[34px] font-extrabold text-white absolute top-[68%]'>energy <span className='text-slate-500'>.</span></h5>
          </div>

          <div className='box box-4 lg:w-1/4 md:w-1/2 w-full h-[320px] flex justify-center items-center flex-col relative'>
            <Image src={b2} width={0} height={0} alt='background' className='h-[320px] w-full object-cover'></Image>
            <i className="ri-sun-line text-[54px] absolute top-[30%] text-white"></i>
            <p className='text-[54px] font-extrabold absolute top-[50%] text-stroke'>SOLAR</p>
            <h5 className='text-[34px] font-extrabold text-white absolute top-[68%]'>energy <span className='text-yellow-500'>.</span></h5>
          </div>

          <div className='box box-3 lg:w-1/4 md:w-1/2 w-full h-[320px] flex justify-center items-center flex-col relative'>
            <Image src={b3} width={0} height={0} alt='background' className='h-[320px] w-full object-cover'></Image>
            <i className="ri-drop-line text-[54px] absolute top-[30%] text-white"></i>
            <p className='text-[54px] font-extrabold absolute top-[50%] text-stroke'>HYDRO</p>
            <h5 className='text-[34px] font-extrabold text-white absolute top-[68%]'>energy <span className='text-sky-500'>.</span></h5>
          </div>

          <div className='box box-4 lg:w-1/4 md:w-1/2 w-full h-[320px] flex justify-center items-center flex-col relative'>
            <Image src={b4} width={0} height={0} alt='background' className='h-[320px] w-full object-cover'></Image>
            <i className="ri-bar-chart-horizontal-line text-[54px] absolute top-[30%] text-white"></i>
            <p className='text-[54px] font-extrabold absolute top-[50%] text-stroke'>WIND</p>
            <h5 className='text-[34px] font-extrabold text-white absolute top-[68%]'>energy <span className='text-green-500'>.</span></h5>
          </div>

          <div className='absolute top-[-135px] z-[-1] hidden md:block'>
            <Image src={abtlf} width={0} height={0} alt='leaf'></Image>
          </div>

        </div>

        <div className="about-why py-12">
          <div className='container mx-auto max-w-[1400px] px-10'>

            <div className='w-full'>
              <h2 className='text-[#2D3545] text-4xl sm:text-7xl font-bold front-text sm:w-1/2 w-full'>Why you should choose us</h2>
            </div>

            <div className='about-contents py-16'>
              <div className="about-content w-full">
                <div className="divider"></div>
                <div className='sm:flex justify-between mt-10 '>
                  <div className="content-title sm:w-[30%] w-full">
                    <h4 className='text-2xl text-[#2D3545] font-bold '>Fast Worldwide delivery</h4>
                  </div>
                  <div className="main-content w-full sm:w-[50%] mt-10 sm:mt-0">
                    <p className='text-gray-500'>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
                  </div>
                </div>

              </div>

              <div className="about-content w-full">
                <div className="divider"></div>
                <div className='sm:flex justify-between mt-10'>
                  <div className="content-title sm:w-[30%] w-full">
                    <h4 className='text-2xl text-[#2D3545] font-bold '>End-to-end solution available</h4>
                  </div>
                  <div className="main-content w-full sm:w-[50%] mt-10 sm:mt-0">
                    <p className='text-gray-500'>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
                  </div>
                </div>

              </div>


              <div className="about-content w-full">
                <div className="divider"></div>
                <div className='sm:flex justify-between mt-10 '>
                  <div className="content-title sm:w-[30%] w-full">
                    <h4 className='text-2xl text-[#2D3545] font-bold '>Safety & Compliance</h4>
                  </div>
                  <div className="main-content w-full sm:w-[50%] mt-10 sm:mt-0">
                    <p className='text-gray-500'>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="about-vid h-full">
          <Image src={bgv} width={0} height={0} alt='bg' className='sm:h-full w-full h-[100px]'></Image>
          <a href="https://www.youtube.com/watch?v=1kUE0BZtTRc" target='_blank'><div className="play-icon"><i className="ri-play-line"></i></div></a>
        </div>

        <div className="about-team py-20">

          <div className='container mx-auto max-w-[1500px] px-10'>
            <div className='w-full'>
              <h2 className='text-[#2D3545] text-4xl sm:text-7xl font-bold front-text sm:w-1/2 w-full'>Meet our team of professionals</h2>
            </div>

            <div className="team-slider">

              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                loop={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className='sm:flex justify-evenly '>

                    <div className="slider-main lg:w-1/3 w-full flex flex-col gap-2">
                      <div className="slider-box ">
                        <Image src={p1} width={0} height={0} alt='person'></Image>
                      </div>

                      <p className='uppercase font-semibold text-gray-400'>Operator</p>
                      <h4 className='text-2xl capitalize font-bold'>Heather F. Cox</h4>
                      <div className='flex gap-4 text-gray-500'>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><i className="ri-facebook-line"></i></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><i className="ri-twitter-fill"></i></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><i className="ri-linkedin-line"></i></a>
                      </div>

                    </div>

                    <div className="slider-main lg:w-1/3 w-full flex flex-col gap-2">
                      <div className="slider-box  ">
                        <Image src={p2} width={0} height={0} alt='person'></Image>
                      </div>

                      <p className='uppercase font-semibold text-gray-400'>CEO</p>
                      <h4 className='text-2xl capitalize font-bold'>Sam Hogan</h4>
                      <div className='flex gap-4 text-gray-500'>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><i className="ri-facebook-line"></i></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><i className="ri-twitter-fill"></i></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><i className="ri-linkedin-line"></i></a>
                      </div>

                    </div>

                    <div className="slider-main lg:w-1/3 w-full flex flex-col gap-2">
                      <div className="slider-box ">
                        <Image src={p3} width={0} height={0} alt='person'></Image>
                      </div>

                      <p className='uppercase font-semibold text-gray-400'>Owner</p>
                      <h4 className='text-2xl capitalize font-bold'>John O Soul</h4>
                      <div className='flex gap-4 text-gray-500'>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><i className="ri-facebook-line"></i></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><i className="ri-twitter-fill"></i></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><i className="ri-linkedin-line"></i></a>
                      </div>

                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='sm:flex justify-evenly'>

                    <div className="slider-main lg:w-1/3 w-full flex flex-col gap-2">
                      <div className="slider-box  ">
                        <Image src={p4} width={0} height={0} alt='person'></Image>
                      </div>

                      <p className='uppercase font-semibold text-gray-400'>Manager</p>
                      <h4 className='text-2xl capitalize font-bold'>Sand Simor</h4>
                      <div className='flex gap-4 text-gray-500'>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><i className="ri-facebook-line"></i></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><i className="ri-twitter-fill"></i></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><i className="ri-linkedin-line"></i></a>
                      </div>

                    </div>

                    <div className="slider-main lg:w-1/3 w-full  flex flex-col gap-2">
                      <div className="slider-box  ">
                        <Image src={p5} width={0} height={0} alt='person'></Image>
                      </div>

                      <p className='uppercase font-semibold text-gray-400'>HR</p>
                      <h4 className='text-2xl capitalize font-bold'>Ham Buer</h4>
                      <div className='flex gap-4 text-gray-500'>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><i className="ri-facebook-line"></i></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><i className="ri-twitter-fill"></i></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><i className="ri-linkedin-line"></i></a>
                      </div>

                    </div>

                    <div className="slider-main lg:w-1/3 w-full flex flex-col gap-2">
                      <div className="slider-box  ">
                        <Image src={p6} width={0} height={0} alt='person'></Image>
                      </div>

                      <p className='uppercase font-semibold text-gray-400'>Technician</p>
                      <h4 className='text-2xl capitalize font-bold'>Anthony Heal</h4>
                      <div className='flex gap-4 text-gray-500'>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><i className="ri-facebook-line"></i></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><i className="ri-twitter-fill"></i></a>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><i className="ri-linkedin-line"></i></a>
                      </div>

                    </div>
                  </div>
                </SwiperSlide>

              </Swiper>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default About
