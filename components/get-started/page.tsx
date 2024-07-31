'use client';

import React from 'react';
import { FaCalendarAlt, FaHandHoldingHeart, FaUsers, FaStar } from 'react-icons/fa';

const GetStarted: React.FC = () => {
    return (
        <section className="bg-zinc-50 overflow-hidden py-12 lg:py-24">
            <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto space-y-24">
                {/* Section Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900">START WITH US TODAY</h2>
                    <p className="text-xl font-semibold text-gray-800">Let&apos; Get Started</p>
                    <p className="text-gray-600">
                        Ready to begin your journey with us? Let&apos;s get started on your personalized care plan today!
                    </p>
                </div>
                {/* Card Section */}
                <div className="flex flex-col sm:flex-row mx-auto space-y-6 sm:space-y-0 sm:space-x-6">
                    {/* Card 1: Appointment */}
                    <div className="relative flex-1 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center space-y-4 transition-transform transform hover:scale-110 hover:rotate-3 hover:-translate-y-6 duration-500 ease-in-out">
                        <FaCalendarAlt className="text-4xl text-blue-500 transition-transform transform hover:scale-125 duration-500 ease-in-out" />
                        <h3 className="text-xl font-semibold text-gray-800">Set an Appointment</h3>
                        <p className="text-center text-gray-600">
                            Schedule your consultation and take the first step towards exceptional home care today.
                        </p>
                        <a href="#_" className="mt-4 text-blue-500 hover:underline">Learn More</a>
                    </div>
                    {/* Card 2: Referrals */}
                    <div className="relative flex-1 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center space-y-4 transition-transform transform hover:scale-110 hover:rotate-3 hover:-translate-y-6 duration-500 ease-in-out">
                        <FaHandHoldingHeart className="text-4xl text-green-500 transition-transform transform hover:scale-125 duration-500 ease-in-out" />
                        <h3 className="text-xl font-semibold text-gray-800">We Accept Referrals</h3>
                        <p className="text-center text-gray-600">
                            Referring someone in need? Trust us to provide compassionate care with open arms.
                        </p>
                        <a href="#_" className="mt-4 text-blue-500 hover:underline">Learn More</a>
                    </div>
                    {/* Card 3: Meet Caregivers */}
                    <div className="relative flex-1 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center space-y-4 transition-transform transform hover:scale-110 hover:rotate-3 hover:-translate-y-6 duration-500 ease-in-out">
                        <FaUsers className="text-4xl text-purple-500 transition-transform transform hover:scale-125 duration-500 ease-in-out" />
                        <h3 className="text-xl font-semibold text-gray-800">Meet Our Caregivers</h3>
                        <p className="text-center text-gray-600">
                            Discover the dedicated hearts behind our care, ready to make a difference in your life.
                        </p>
                        <a href="#_" className="mt-4 text-blue-500 hover:underline">Learn More</a>
                    </div>
                    {/* Card 4: Client Satisfaction */}
                    <div className="relative flex-1 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center space-y-4 transition-transform transform hover:scale-110 hover:rotate-3 hover:-translate-y-6 duration-500 ease-in-out">
                        <FaStar className="text-4xl text-yellow-500 transition-transform transform hover:scale-125 duration-500 ease-in-out" />
                        <h3 className="text-xl font-semibold text-gray-800">Client Satisfaction Survey</h3>
                        <p className="text-center text-gray-600">
                            Share your experience, and help us improve for your continued happiness and well-being.
                        </p>
                        <a href="#_" className="mt-4 text-blue-500 hover:underline">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStarted;
