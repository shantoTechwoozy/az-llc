'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaBed, FaPlaneDeparture, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Popup: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        // Automatically open the popup when the site loads
        setIsOpen(true);
    }, []);

    const closePopup = () => {
        setIsOpen(false);
    };

    return (
        isOpen ? (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
                <div className="relative bg-white rounded-lg overflow-hidden w-full max-w-4xl mx-4 sm:mx-6 md:mx-8 lg:mx-12 h-auto max-h-[80vh] flex flex-col">
                    <button
                        onClick={closePopup}
                        className="absolute top-4 right-4 p-2 bg-gradient-to-r from-green-400 via-blue-500 to-blue-600 text-white rounded-full text-lg"
                    >
                        &times;
                    </button>
                    <div className="flex flex-col items-center p-6 flex-1 overflow-auto">
                        <div className="flex justify-center mb-4">
                            <Image src="/header/logo.png" alt="Logo" width={220} height={120} />
                        </div>
                        <div className="text-left px-4">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                Seamless Transportation Solutions Tailored for You!
                            </h2>
                            <p className="text-gray-700 mb-6">
                                Are you or a loved one in need of reliable and comfortable transportation services? Look no further! At AZ Transportation and Care Services LLC, we take pride in providing top-notch transportation solutions for our clients.
                            </p>
                            <div className="mb-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                                    <FaBed className="text-green-500 mr-2" />
                                    Ambulatory Patient Transportation:
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Our ambulatory patient transportation services ensure a safe and comfortable journey for individuals requiring special care and attention. Our experienced and compassionate staff are dedicated to making every trip as smooth as possible, ensuring the well-being of our clients.
                                </p>
                            </div>
                            <div className="mb-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                                    <FaPlaneDeparture className="text-blue-500 mr-2" />
                                    Airport Services:
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Traveling to or from the airport has never been more convenient. Our airport transportation services guarantee timely arrivals and departures, allowing you to focus on your journey without the stress of transportation logistics. Sit back, relax, and let us take care of the rest.
                                </p>
                            </div>
                            <div className="mb-6">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center">
                                    <FaMapMarkerAlt className="text-red-500 mr-2" />
                                    Service Areas:
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 mb-4">
                                    <li>Contra Costa</li>
                                    <li>Alameda County</li>
                                    <li>San Francisco</li>
                                </ul>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="flex items-center mb-4">
                                    <FaPhone className="text-teal-500 mr-3" />
                                    <span className="text-gray-700">Phone: +19255675766</span>
                                </div>
                                <div className="flex items-center mb-4">
                                    <FaEnvelope className="text-teal-500 mr-3" />
                                    <span className="text-gray-700">Email: jamy88876@gmail.com</span>
                                </div>
                                <div className="flex items-center">
                                    <FaMapMarkerAlt className="text-teal-500 mr-3" />
                                    <span className="text-gray-700">Locate Us: Antioch, CA 94509</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : null
    );
};

export default Popup;
