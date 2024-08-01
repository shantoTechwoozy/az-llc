'use client';

import React from 'react';
import cardData from './carddata';
import Image from 'next/image';

const Service: React.FC = () => {
    return (
        <section className="py-16">
            <div className="text-center space-y-4 mb-5 px-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-400">WHAT WE DO</h2>
                <p className="text-2xl sm:text-4xl lg:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-blue-600">
                    Services We Offer
                </p>
                <p className="text-gray-600">
                    Comprehensive home care solutions tailored to your needs because your well-being matters most.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-green-300 ring-opacity-40 max-w-sm transition-transform transform hover:scale-105 hover:shadow-xl"
                    >
                        <div className="relative w-full h-[200px] sm:h-[250px]">
                            <Image
                                src={card.imagePath}
                                alt={card.title}
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-full"
                            />
                        </div>

                        <div className="flex flex-col justify-between flex-grow p-4">
                            <div>
                                <h3 className="text-sm sm:text-lg font-medium mb-2">{card.title}</h3>
                                <p className="text-gray-600 text-xs sm:text-sm mb-4">{card.description}</p>
                            </div>

                            <a
                                className="bg-gradient-to-r from-green-400 via-blue-500 to-blue-600 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded self-end text-xs sm:text-sm"
                                href="#"
                            >
                                {card.buttonText}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Service;
