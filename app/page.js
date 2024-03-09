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

import './home.scss'
import 'animate.css';

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
              <Image src={Bg1} width={0} height={0} alt='background' className='object-cover h-full w-full'></Image>
              <p className='text-[80px]  md:text-[120px] font-extrabold absolute text-stroke animate__animated animate__fadeInRight'>HYDRO</p>
              <h5 className='animate__animated animate__fadeInRight absolute text-[80px] font-extrabold mt-[180px] text-light text-white'>energy <span className='text-sky-500'>.</span></h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='img-wrapper w-full h-[100dvh] relative flex justify-center items-center text-wrap'>
              <Image src={Bg2} width={0} height={0} alt='background' className='object-cover h-full w-full'></Image>
              <p className=' text-[80px]  md:text-[120px] font-extrabold absolute text-stroke animate__animated animate__fadeInRight'>SOLAR</p>
              <h5 className='animate__animated animate__fadeInRight absolute text-[80px] font-extrabold mt-[180px] text-light text-white'>energy <span className='text-yellow-400'>.</span></h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='img-wrapper w-full h-[100dvh] relative flex justify-center items-center text-wrap'>
              <Image src={Bg3} width={0} height={0} alt='background' className='object-cover h-full w-full'></Image>
              <p className=' text-[80px]  md:text-[120px] font-extrabold absolute text-stroke animate__animated animate__fadeInRight'>BIOGAS</p>
              <h5 className='animate__animated animate__fadeInRight absolute text-[80px] font-extrabold mt-[180px] text-light text-white'>energy <span className='text-slate-400'>.</span></h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='img-wrapper w-full h-[100dvh] relative flex justify-center items-center text-wrap'>
              <Image src={Bg4} width={0} height={0} alt='background' className='object-cover h-full w-full'></Image>
              <p className=' text-[80px]  md:text-[120px] font-extrabold absolute text-stroke animate__animated animate__fadeInRight'>WIND</p>
              <h5 className='animate__animated animate__fadeInRight absolute text-[80px] font-extrabold mt-[180px] text-light text-white'>energy <span className='text-slate-400'>.</span></h5>
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
    </main>
  );
}
