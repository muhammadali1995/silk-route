import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import slider1 from './../../assets/imgs/slider1.png'
import slider2 from './../../assets/imgs/slider2.png'
import slider3 from './../../assets/imgs/slider3.png'
import slider4 from './../../assets/imgs/slider4.png'

export default function Slider() {
    return (

        <Swiper
            className='-mt-24'
            loop
            style={{ zIndex: 1 }}
            direction="horizontal"
            slidesPerView={1}
        >
            <SwiperSlide >
                <div className='w-full relative'>
                    <div className='pb-52 pt-60 max-w-max mx-auto'>
                        <img src={slider1} alt="slider1" className='absolute max-w-[1440px] mx-auto w-full top-0 -z-10 object-cover' />
                        <h1 className='text-title80 font-anton text-white ml-24'>Immigration <br /> Tailored <br /> to You</h1>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full relative'>
                    <div className='pt-52 max-w-max mx-auto'>
                        <img src={slider2} alt="slider1" className='absolute max-w-[1440px] mx-auto w-full top-0 -z-10 object-cover' />
                        <div className='flex items-center justify-end'>
                            <h1 className='text-title80 font-anton text-white mr-24'>Immigrating <br /> is a <br />
                                <div> scary </div>
                                <span className='text-vividPink'>luxury</span> <br /> experience</h1>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full relative'>
                    <div className='py-40 max-w-max mx-auto'>
                        <img src={slider3} alt="slider1" className='absolute max-w-[1440px] mx-auto w-full top-0 -z-10' />
                        <h1 className='text-title80 font-anton text-white ml-24'>Immigration <br /> Tailored <br /> to You</h1>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full relative'>
                    <div className='py-40 max-w-max mx-auto'>
                        <img src={slider4} alt="slider1" className='absolute max-w-[1440px] mx-auto w-full top-0 -z-10' />
                        <h1 className='text-title80 font-anton text-white ml-24'>Immigration <br /> Tailored <br /> to You</h1>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}