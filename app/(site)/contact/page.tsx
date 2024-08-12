import Image from 'next/image';
import React from 'react';

const ContactUs = () => {
    return (
        <div className="mt-8 mb-8 relative flex items-top justify-center h-auto bg-white dark:bg-gray-900 sm:items-center">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-2 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2">
                        <div className="relative bg-[url('/contact/contact.jpg')] bg-cover bg-center bg-no-repeat sm:rounded-lg h-96 md:h-[400px] lg:h-[500px] xl:h-[600px]">
                        </div>

                        <form action="https://fabform.io/f/xxxxx" method="post" className="p-5 flex flex-col justify-center">
                            <div className="flex flex-col mb-4">
                                <div className="">
                                    <h1 className="text-4xl sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-blue-600 font-extrabold tracking-tight">
                                        REACH OUT TO US

                                    </h1>
                                    <p className="text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                                        Send Us a Message
                                        If you have any questions about our services and staff, please message us here.
                                    </p>
                                    <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <div className="ml-4 text-md tracking-wide font-semibold">
                                            +19255675766
                                        </div>
                                    </div>

                                    <div className="flex items-center mt-2 mb-5 text-gray-600 dark:text-gray-400">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <div className="ml-4  text-md tracking-wide font-semibold">
                                            <a href="mailto:jamy88876@gmail.com" className="text-blue-600 dark:text-blue-500 hover:underline">
                                                jamy88876@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <label htmlFor="name" className="hidden">Full Name</label>
                                <input type="text" name="name" id="name" placeholder="Full Name" className="w-full py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                            </div>

                            <div className="flex flex-col mb-4">
                                <label htmlFor="email" className="hidden">Email</label>
                                <input type="email" name="email" id="email" placeholder="Email" className="w-full py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                            </div>

                            <div className="flex flex-col mb-4">
                                <label htmlFor="message" className="hidden">Message</label>
                                <textarea name="message" id="message" placeholder="Your Message" className="w-full py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                            </div>

                            <button type="submit" className="bg-gradient-to-r from-green-400 via-blue-500 to-blue-600 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
