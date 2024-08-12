'use client';
import React from 'react';
import Image from 'next/image';
import { FaCar, FaClock, FaEnvelope, FaHandHoldingHeart, FaHospital, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Appointment: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Banner Section */}
            <div className="relative w-full h-64 md:h-80 overflow-hidden">
                <Image
                    src="/appoint/appoint.jpg" // Replace with the path to your banner image
                    alt="Transportation to Medical Appointments"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                <div className="relative z-10 flex items-center justify-center h-full">
                    <h1 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-700 to-blue-500">
                        Transportation to Medical Appointments
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto p-6 md:p-12">
                {/* <nav className="mb-6 text-gray-600">
                    <a href="/" className="hover:underline">Home</a> &gt; <a href="/services" className="hover:underline">Services</a> &gt; Transportation to Medical Appointments
                </nav> */}

                <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">The road to wellness starts with us.</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        We understand the importance of a hassle-free journey to medical appointments, especially for ambulatory patients. At AZ Transportation and Care Services LLC, we specialize in reliable and compassionate transportation services tailored exclusively for ambulatory individuals, ensuring their safe arrival at healthcare facilities. Our team is trained to not only drive but also provide any necessary assistance during the journey.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Timely access to healthcare is critical, and we prioritize making this process smooth and worry-free. Rest assured, with us, your family member’s well-being during transit is our top priority, allowing them to focus on their health journey with complete peace of mind.
                    </p>

                    <ul className="space-y-6">
                        <li className="flex items-start space-x-4">
                            <FaCar className="w-8 h-8 text-green-500 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Reliable Transportation</h3>
                                <p className="text-gray-700">
                                    Our vehicles are equipped and maintained to ensure a smooth and comfortable ride to medical appointments.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start space-x-4">
                            <FaClock className="w-8 h-8 text-blue-500 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Punctual and Timely</h3>
                                <p className="text-gray-700">
                                    We understand the importance of timeliness, ensuring that your loved ones reach their appointments on schedule.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start space-x-4">
                            <FaHandHoldingHeart className="w-8 h-8 text-orange-500 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Compassionate Care</h3>
                                <p className="text-gray-700">
                                    Our drivers provide friendly and supportive assistance to make the journey as comfortable as possible.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start space-x-4">
                            <FaHospital className="w-8 h-8 text-red-500 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Specialized for Medical Visits</h3>
                                <p className="text-gray-700">
                                    We specialize in transportation for medical appointments, ensuring that the specific needs of ambulatory patients are met.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start space-x-4">
                            <FaMapMarkerAlt className="w-8 h-8 text-teal-500 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Local Expertise</h3>
                                <p className="text-gray-700">
                                    Our team is familiar with local healthcare facilities and routes, ensuring a smooth journey to any appointment.
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>

                {/* Contact Information */}
                <section className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch with Us Today!</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Do not hesitate to ask a question to learn more about our team and what we do.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex items-center">
                            <FaPhone className="w-6 h-6 text-blue-500 mr-3" />
                            <a href="tel:+19255675766" className="text-blue-600 hover:underline">+19255675766</a>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="w-6 h-6 text-blue-500 mr-3" />
                            <a href="mailto:jamy88876@gmail.com" className="text-blue-600 hover:underline">jamy88876@gmail.com</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Appointment;
