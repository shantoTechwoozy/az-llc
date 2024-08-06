'use client';
import React from 'react';
import Image from 'next/image';
import { FaHandHoldingHeart, FaToiletPaper, FaShower, FaWalking, FaBed, FaPhone, FaEnvelope } from 'react-icons/fa';

const Assistance: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner Section */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <Image
          src="/assistance/asses.jpg" // Replace with the path to your banner image
          alt="Assistance with Activities of Daily Living"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-700 to-blue-500">
            Assistance with Activities of Daily Living
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-6 md:p-12">
        {/* <nav className="mb-6 text-gray-600">
          <a href="/" className="hover:underline">Home</a> &gt; <a href="/services" className="hover:underline">Services</a> &gt; Assistance with Activities of Daily Living
        </nav> */}
        
        <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your daily living is provided with elevated care</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our approach to assisting with daily activities is rooted in preserving dignity and promoting independence. At AZ Transportation and Care Services LLC, we believe everyone deserves to live on their own terms. Our skilled caregivers offer respectful and discreet support, ensuring your loved one can maintain their routines and preferences. Be it aiding with personal grooming or enhancing their mobility, we custom-tailor our care to match specific needs, nurturing independence and fostering unwavering confidence. With us, your family members can enjoy each day with comfort and grace, knowing they have a caring partner in their journey.
          </p>

          <ul className="space-y-6">
            <li className="flex items-start space-x-4">
              <FaHandHoldingHeart className="w-8 h-8 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Personal Grooming</h3>
                <p className="text-gray-700">
                  Our caregivers assist with personal grooming tasks such as bathing, dressing, and hygiene, ensuring comfort and dignity.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <FaToiletPaper className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Toileting Assistance</h3>
                <p className="text-gray-700">
                  We provide respectful assistance with toileting needs, promoting independence while ensuring privacy and comfort.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <FaShower className="w-8 h-8 text-orange-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Bathing and Showering</h3>
                <p className="text-gray-700">
                  Our team helps with bathing and showering to maintain cleanliness and personal comfort, while ensuring safety and ease.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <FaWalking className="w-8 h-8 text-red-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Mobility Support</h3>
                <p className="text-gray-700">
                  We offer support with walking and transferring, helping your loved ones move safely and comfortably throughout their home.
                </p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <FaBed className="w-8 h-8 text-teal-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Bed Assistance</h3>
                <p className="text-gray-700">
                  Our caregivers assist with bed positioning and comfort, ensuring a restful sleep and aiding with any bed-related needs.
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
              <a href="tel:925-237-8403" className="text-blue-600 hover:underline">925-237-8403</a>
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

export default Assistance;
