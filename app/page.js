"use client"
import React, { useRef, useState } from 'react';
import 'remixicon/fonts/remixicon.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, EffectFade, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css/effect-fade';

//Importing Backgrounds
import Bg1 from '../img/bg1.jpg'
import Bg2 from '../img/bg2.jpg'
import Bg3 from '../img/bg3.jpg'
import Bg4 from '../img/bg4.jpg'
import b1 from '../img/13.jpg'
import b2 from '../img/12.jpg'
import b3 from '../img/11.jpg'
import b4 from '../img/10.jpg'
import lf from '../img/34.jpg'
import rotate from '../img/rotate.png'
import leaf from '../img/leaf-3.png'
import turbine from '../img/25.jpg'
import leaf25 from '../img/25bg.png'

//IMAGES FOR FILTER
import f1 from '../img/f1.jpg'
import f2 from '../img/f2.jpg'
import f3 from '../img/f3.jpg'
import f4 from '../img/f4.jpg'
import f5 from '../img/f5.jpg'
import f6 from '../img/f6.jpg'

import './filter.js'

import './home.scss'
import 'animate.css';
import Link from 'next/link';
import Script from 'next/script';

export default function Home() {
  return (

    <main>
      <div className="slider relative">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          effect={'fade'}
          modules={[Pagination, EffectFade, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className='img-wrapper w-full h-[100dvh] relative flex justify-center items-center text-wrap'>
              <Image src={Bg1} width={0} height={0} alt='background' className='object-cover h-full w-full' priority></Image>
              <p className='text-[54px]  md:text-[120px] font-extrabold absolute text-stroke animate__animated animate__fadeInRight'>HYDRO</p>
              <h5 className='animate__animated animate__fadeInRight absolute text-[54px] md:text-[80px] font-extrabold mt-[180px] text-light text-white'>energy <span className='text-sky-500'>.</span></h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='img-wrapper w-full h-[100dvh] relative flex justify-center items-center text-wrap'>
              <Image src={Bg2} width={0} height={0} alt='background' className='object-cover h-full w-full'></Image>
              <p className='text-[54px]  md:text-[120px] font-extrabold absolute text-stroke animate__animated animate__fadeInRight'>SOLAR</p>
              <h5 className='animate__animated animate__fadeInRight absolute text-[54px] md:text-[80px] font-extrabold mt-[180px] text-light text-white'>energy <span className='text-yellow-400'>.</span></h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='img-wrapper w-full h-[100dvh] relative flex justify-center items-center text-wrap'>
              <Image src={Bg3} width={0} height={0} alt='background' className='object-cover h-full w-full'></Image>
              <p className='text-[54px]  md:text-[120px] font-extrabold absolute text-stroke animate__animated animate__fadeInRight'>BIOGAS</p>
              <h5 className='animate__animated animate__fadeInRight absolute text-[54px] md:text-[80px] font-extrabold mt-[180px] text-light text-white'>energy <span className='text-slate-400'>.</span></h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='img-wrapper w-full h-[100dvh] relative flex justify-center items-center text-wrap'>
              <Image src={Bg4} width={0} height={0} alt='background' className='object-cover h-full w-full'></Image>
              <p className='text-[54px]  md:text-[120px] font-extrabold absolute text-stroke animate__animated animate__fadeInRight'>WIND</p>
              <h5 className='animate__animated animate__fadeInRight absolute text-[54px] md:text-[80px] font-extrabold mt-[180px] text-light text-white'>energy <span className='text-slate-400'>.</span></h5>
            </div>
          </SwiperSlide>

        </Swiper>

        <div className='md:absolute block right-0 bottom-0 video-box w-full md:w-[530px] '>
          <a href="https://www.youtube.com/watch?v=1kUE0BZtTRc" className='zoom-in' target='_blank'>
            <div className="video-con after:content-['&#xF00B'] ">
              <Image src={Bg3} width={0} height={0} alt='video' className='h-full w-full'></Image>
            </div>
          </a>
        </div>
      </div>

      {/* CARDS */}
      <section className="boxes flex flex-wrap">

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
      </section>

      <section className='py-11 info-section'>
        <div className="container mx-auto p-8 flex lg:flex-row flex-col  justify-center gap-8 lg:justify-between items-center max-w-[1400px]">
          <div className="lg:w-[60%] lg:p-20 md w-full">
            <div className='w-full h-full img-turbine relative'>
              <Image src={lf} width={0} height={0} alt='bg'></Image>

              <div className='rotate-text absolute bottom-5 left-5 w-[90px] md:w-[150px] opacity-75'>
                <Image src={rotate} width={0} height={0} alt='text'></Image>
              </div>
            </div>

          </div>
          <div className='lg:w-[40%] w-full'>
            <h2 className='font-bold text-[24px] md:text-6xl w-[80%] text-[#2D3545] text-wrap'>Investing in clean energy generation</h2>
            <p className='text-gray-600 py-12 w-[70%] leading-8 font-medium'>We’re among the world’s leading renewable energy solutions providers that is revolutionising and redefining the way sustainable energy sources are harnessed across the world. We are presented in many countries across the world.</p>
            <div className='nav-item-btn '>
              <Link href="/contact" className='uppercase md:py-4 md:px-6 py-4 px-2 bg-[white border-[1px] border-black font-medium '>MORE ABOUT US</Link>
            </div>
          </div>
        </div>
        <div className="marquee marquee--1">
          <div className="track">
            <div className="text-[74px]  font-bold stroke--text">&nbsp;The potential of renewable energy is immense The potential of renewable energy is immense The potential of renewable energy is immense The potential of renewable energy is immense The potential of renewable energy is immense The potential of renewable energy is immense </div>
          </div>
        </div>
        <div className="marquee marquee--2">
          <div className="track">
            <div className="text-[74px] text-[#2D3545] font-bold ">&nbsp;The potential of renewable energy is immense The potential of renewable energy is immense The potential of renewable energy is immense The potential of renewable energy is immense The potential of renewable energy is immense The potential of renewable energy is immense </div>
          </div>
        </div>
      </section>

      {/*PLAN SECTION */}
      <section className="plan-section py-24 px-4 relative">
        <div className="container mx-auto max-w-[1200px] flex flex-col lg:flex-row py-3 lg:gap-5 gap-2">
          <div className='plan-box lg:w-[33%] w-full plan-box-1 lg:h-[25em] h-[200px] '>
            <h3>We plan each project individually</h3>
            <p>Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim in ipsum id orci porta dapibus.</p>
            <div className="num-con num-con-1 ">
              01
            </div>
          </div>

          <div className='plan-box lg:w-[33%] w-full plan-box-2 lg:justify-center lg:h-[25em] h-[200px]'>
            <h3>We provide research & analysis for any case</h3>
            <p>Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim in ipsum id orci porta dapibus.</p>
            <div className="num-con num-con-2 ">
              02
            </div>
          </div>

          <div className='plan-box lg:w-[33%] w-full plan-box-3 lg:justify-end lg:h-[25em] h-[200px]'>
            <h3>We make it happen whatever it takes</h3>
            <p>Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim in ipsum id orci porta dapibus.</p>
            <div className="num-con num-con-3">
              03
            </div>
          </div>


        </div>
        <Image src={leaf} width={0} height={0} alt='leaf' className='absolute top-0 right-0 z-[-100] hidden sm:block'></Image>
      </section>
      {/* PLAN SECTION */}


      {/* PURPOSE SECTION */}
      <section className="purpose-section lg:flex  py-12">

        <div className="lg:w-[45%] ">
          <div className='relative after-img'>
            <a href="https://www.youtube.com/watch?v=1kUE0BZtTRc" target='_blank'>
              <Image src={turbine} width={0} height={0} alt='a picture of turbine'></Image>
              <i className="ri-play-line absolute top-[50%] text-white left-[50%] text-5xl"></i>
              <div className='absolute top-[-50%] translate-y-[10%] z-[-1] hidden lg:block'>

                <Image src={leaf25} width={0} height={0} alt='leaf'></Image>
              </div>
            </a>

          </div>


        </div>

        <div className="lg:w-[55%] px-28 py-36">
          <h2 className='text-6xl font-bold text-[#2D3545]'>We are building a better future</h2>
        </div>
      </section>
      {/* PURPOSE SECTION */}

      {/*FILTER SECTION*/}
      <section className="filter-section">
        <div className="container mx-auto max-w-[1200px] py-12 px-10">
          <div className="filter-title">
            <h2 className='text-6xl text-[#2D3545] font-bold'> Case Studies</h2>
          </div>

          <div className="filter-nav py-12 flex justify-between items-center flex-wrap gap-5">
            <ul className='filter-nav-items p-0 m-0 flex font-light gap-16 flex-wrap'>
              <li className='active filter-btn' data-filter="all">ALL</li>
              <li className='filter-btn' data-filter="turbine">WIND TURBINES</li>
              <li className='filter-btn' data-filter="solar">SOLAR PANELS</li>
              <li className='filter-btn' data-filter="bio">BIO ENERGY</li>
              <li className='filter-btn' data-filter="water">WATER ENERGY</li>
              <li className='filter-btn' data-filter="others">OTHERS</li>
            </ul>
            <div className='uppercase py-2 px-5 border-[green] border cursor-pointer'>See All Cases</div>
          </div>

          <div className="filter-items">
            <div className="filter-items-container flex gap-5 flex-wrap md:flex-row flex-col justify-center">

              <div className="items-con w-full h-full turbine" data-category="turbine">
                <Image width={0} height={0} alt='picture' src={f2} ></Image>
                <h2 className='items-title'>Windmill station in Ohio</h2>
              </div>

              <div className="items-con w-full h-full solar" data-category="solar">
                <Image width={0} height={0} alt='picture' src={f3} ></Image>
                <h2 className='items-title'>Renewable energy station </h2>
              </div>

              <div className="items-con w-full h-full solar" data-category="solar">
                <Image width={0} height={0} alt='picture' src={f5} ></Image>
                <h2 className='items-title'>Renewable energy station </h2>
              </div>

              <div className="items-con w-full h-full turbine" data-category="turbine">
                <Image width={0} height={0} alt='picture' src={f4} ></Image>
                <h2 className='items-title'>Renewable energy station </h2>
              </div>

              <div className="items-con w-full h-full turbine" data-category="turbine">
                <Image width={0} height={0} alt='picture' src={f6}></Image>
                <h2 className='items-title'>Renewable energy station </h2>
              </div>

              <div className="items-con bio" data-category="bio">
                <Image width={0} height={0} alt='picture' src={f1} className='' ></Image>
                <h2 className='items-title'>Electricity station</h2>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/*FILTER SECTION*/}

      {/* TESTIMONIALS SECTION */}
      {/* <section className='testimonial-section bg-[#80808015] py-20 '>

      </section> */}
      {/* TESTIMONIALS SECTION */}
      
      
    </main>

  );

}
