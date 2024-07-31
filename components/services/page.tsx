'use client';

import React from 'react';
import cardData from './carddata';
import Image from 'next/image';

const Service: React.FC = () => {
    return (
        <section className="py-16 ">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white">
                    OUR SERVICES
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col overflow-hidden  rounded-lg  h-[450px] transition-transform transform hover:scale-105 hover:shadow-xl"
                    >
                        <div className="absolute inset-0">
                            <Image
                                src={card.imagePath}
                                alt={card.title}
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-full object-cover"

                            />
                        </div>

                        <div className="mt-[170px] relative p-6 flex flex-col justify-between h-full bg-gradient-to-t from-black/40 to-transparent bg-black opacity-40 hover:opacity-90">
                            <div>
                                <h3 className="text-sm font-medium uppercase tracking-widest text-white">{card.title}</h3>
                                <p className="mt-2 text-lg font-semibold text-white">{card.title}</p>
                                <p className="mt-4 text-sm text-white">{card.description}</p>
                            </div>

                            <a
                                className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-white focus:outline-none focus:ring active:text-indigo-500"
                                href="#"
                            >
                                <span className="absolute -start-full transition-all group-hover:start-4">
                                    <svg
                                        className="size-5 rtl:rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </span>

                                <span className="text-sm font-medium transition-all group-hover:ms-4"> {card.buttonText} </span>
                            </a>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Service;
