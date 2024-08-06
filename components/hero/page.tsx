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
        <section className="relative w-full min-h-[50vh] md:min-h-[50vh] bg-white">
            {/* Swiper for large screens */}
            <div className="hidden lg:block h-full">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{ delay: 8000, disableOnInteraction: false }}
                    speed={2500}
                    pagination={{ clickable: true }}
                    navigation={false}
                    className="h-full"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="!p-0">
                            <div
                                className="relative w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover' }}
                            >
                                <div className="absolute inset-0 bg-black/40"></div>
                                <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:flex lg:h-full lg:items-center lg:px-8 text-white">
                                    <div className="max-w-xl text-center lg:text-left">
                                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                                            {slide.title}
                                            <strong className="block font-extrabold text-[#339FB1]">{slide.subtitle}</strong>
                                        </h1>
                                        <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                                            {slide.description}
                                        </p>
                                        <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                                            <a
                                                href="#"
                                                className="block w-full rounded bg-[#339FB1] px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
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
            </div>

            {/* Text content and button for medium and small screens */}
            <div className="lg:hidden flex flex-col justify-center items-center min-h-[50vh] py-8 px-4 bg-[#339FB1] text-center text-white">
                <h1 className="text-3xl font-extrabold sm:text-4xl">
                    Caring Hearts
                    <strong className="block font-extrabold text-[#339FB1]">Dedicated to You</strong>
                </h1>
                <p className="mt-4 max-w-lg text-sm sm:text-base">
                    Discover a world of support as we provide exceptional care tailored to your unique needs.
                </p>
                <div className="mt-8">
                    <a
                        href="#"
                        className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
