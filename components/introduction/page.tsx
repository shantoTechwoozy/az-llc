'use client';
import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="relative w-full overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
            {/* Background Image Container with Blur */}
            <div className="relative flex items-center justify-center">
                {/* Background Image with Blur Effect */}
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUcZYKLBtubNFAbUuhzhLX1dM4GJQyZk2hNg&s"
                        alt="Background image with a blur effect"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 object-cover blur-md opacity-70" // Apply blur effect
                    />
                </div>

                {/* Main Image with Animation */}
                <div className="relative z-10 flex items-center justify-center">
                    <div className="fadeInUp">
                        <Image
                            src="https://www.azcareservicesllc.com/wp-content/themes/azcarema718/images/main_hero.png"
                            alt="female caregiver with an elderly woman smiling"
                            width={800}
                            height={600}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>

            {/* Text Content */}
            <div className="relative p-8 md:p-12 lg:px-16 lg:py-24 flex items-center z-10">
                <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h3 className='text-md font-bold text-left'>INTRODUCING</h3>
                    <h1 className="text-4xl mt-5 text-left font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-blue-600">
                        AZ Transportation and Care Services LLC
                    </h1>

                    <p className="text-gray-600 mt-4 text-lg md:text-xl text-left">
                        Welcome to AZ Transportation and Care Services LLC, where compassion meets care in the comfort of your home. We understand that your loved ones deserve the best, and that’s exactly what we deliver. We’re committed to creating a safe, nurturing, and supportive environment so you can trust that your loved ones are in capable hands. Explore our services, meet our team, and discover the difference that genuine care makes. We’re here to help your loved ones thrive in – their home.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
