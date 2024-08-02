'use client';

import Image from 'next/image';
import React from 'react';

const About: React.FC = () => {
    return (
        <section className="pt-10 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 md:grid-cols-2">
                    <div className="relative p-8 md:p-12 lg:px-16 lg:py-24 flex items-center z-10">
                        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                            <h3 className='text-md font-bold text-left'>WE ARE COMMITTED</h3>
                            <h1 className="text-5xl mt-5 text-left font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-blue-600">
                                Our Mission Statement
                            </h1>
                            <p className="text-gray-600 mt-4 text-lg md:text-xl text-left">
                                At AZ Transportation and Care Services LLC, our mission is to enhance your loved one&apos;s life with genuine care, respect, and unwavering dedication, enriching every home we touch.
                            </p>
                            <div className="mt-6 flex justify-left">
                                <a
                                    href="#"
                                    className="inline-flex items-left px-6 py-3 text-white bg-sky-500 hover:bg-sky-600 rounded transition duration-300 ease-in-out"
                                    title="Learn more about us"
                                >
                                    About Us
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <Image 
                            className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" 
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" 
                            alt="Decorative blob shape" 
                            width={800} 
                            height={600} 
                        />

                        <Image 
                            className="relative w-full xl:mx-auto 2xl:origin-bottom 2xl:scale-110" 
                            src="/about/about.png" 
                            alt="Business woman" 
                            width={1200} 
                            height={900} 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
