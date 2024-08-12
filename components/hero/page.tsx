'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {
    const slides = [
        {
            image: '/banner/b1.jpg',
            title: 'Caring Hearts',
            subtitle: 'Dedicated to You',
            description: 'Discover a world of support as we provide exceptional care tailored to your unique needs.'
        },
        {
            image: '/banner/b2.jpg',
            title: 'Caring Hearts',
            subtitle: 'Dedicated to You',
            description: 'Discover a world of support as we provide exceptional care tailored to your unique needs.'
        },
        {
            image: '/banner/b3.jpg',
            title: 'Caring Hearts',
            subtitle: 'Dedicated to You',
            description: 'Discover a world of support as we provide exceptional care tailored to your unique needs.'
        },
        {
            image: '/banner/b4.jpg',
            title: 'Caring Hearts',
            subtitle: 'Dedicated to You',
            description: 'Discover a world of support as we provide exceptional care tailored to your unique needs.'
        },
    ];

    return (
        <section className="relative w-full h-[75vh] overflow-hidden">
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 8000, disableOnInteraction: false }}
                speed={2500}
                pagination={{ clickable: true }}
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="relative">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-black/50"></div>
                            <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:flex lg:h-full lg:items-center lg:px-8 text-white">
                                <div className="max-w-xl text-center lg:text-left">
                                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                                        {slide.title}
                                        <strong className="block font-extrabold text-[#339FB1]">{slide.subtitle}</strong>
                                    </h1>
                                    <p className="mt-4 max-w-lg sm:text-xl">
                                        {slide.description}
                                    </p>
                                    <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                                        <a
                                            href="#"
                                            className="block w-full rounded bg-[#339FB1] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#297c8b] focus:outline-none focus:ring active:bg-[#297c8b] sm:w-auto"
                                        >
                                           Contact Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Hero;
