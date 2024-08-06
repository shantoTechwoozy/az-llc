'use client';
import React from 'react';
import { FaClipboardList, FaHandsHelping, FaCar, FaHouseUser } from 'react-icons/fa';
import Image from 'next/image';
import Announcement from '@/components/announcement/page';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Announcement />
      {/* Banner Section */}
      <div className="relative w-full h-64 md:h-80">
        <Image
          src="/service/banner.jpg" // Replace with the path to your image
          alt="Services Banner"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-700 to-blue-500">
            Our Services
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6 md:p-12">
        {/* Services List */}
        <section className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-blue-600 text-transparent bg-clip-text">
                We Offer The Following Services
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Companionship */}
            <div className="relative border border-gray-300 rounded-lg shadow-lg bg-white overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-r from-green-400 via-blue-500 to-blue-600 text-white text-center font-bold text-lg">
                1
              </div>
              <div className="p-6 flex flex-col items-center mt-8">
                <FaHandsHelping className="w-12 h-12 text-green-600 mb-4 mt-5" />
                <h3 className="text-xl text-center font-semibold text-gray-800 mb-4">Companionship</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Warm companionship to brighten your loved one&apos;s day, always by their side. Our caregivers form genuine connections, offering not just support but also joyful moments and heartfelt conversations.
                </p>
              </div>
            </div>

            {/* Assistance with Activities of Daily Living */}
            <div className="relative border border-gray-300 rounded-lg shadow-lg bg-white overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-r from-green-400 via-blue-500 to-blue-600 text-white text-center font-bold text-lg">
                2
              </div>
              <div className="p-6 flex flex-col items-center mt-8">
                <FaClipboardList className="w-12 h-12 text-blue-600 mb-4 mt-5" />
                <h3 className="text-xl text-center font-semibold text-gray-800 mb-4">Assistance with Activities of Daily Living</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Personalized support for daily tasks, ensuring comfort, dignity, and independence. Our compassionate caregivers are trained to offer respectful aid, allowing your family member to continue their routines with confidence and grace.
                </p>
              </div>
            </div>

            {/* Transportation to Medical Appointments */}
            <div className="relative border border-gray-300 rounded-lg shadow-lg bg-white overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-r from-green-400 via-blue-500 to-blue-600 text-white text-center font-bold text-lg">
                3
              </div>
              <div className="p-6 flex flex-col items-center mt-8">
                <FaCar className="w-12 h-12 text-red-600 mb-4 mt-5" />
                <h3 className="text-xl text-center font-semibold text-gray-800 mb-4">Transportation to Medical Appointments</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Reliable transportation catered exclusively to ambulatory patients, guaranteeing their safe arrival at medical appointments. Our priority is the well-being of your loved ones.
                </p>
              </div>
            </div>

            {/* Light Housekeeping */}
            <div className="relative border border-gray-300 rounded-lg shadow-lg bg-white overflow-hidden transform transition-transform duration-300 hover:scale-105 col-span-1 sm:col-span-2 lg:col-span-1 lg:justify-self-center">
              <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-r from-green-400 via-blue-500 to-blue-600 text-white text-center font-bold text-lg">
                4
              </div>
              <div className="p-6 flex flex-col items-center mt-8">
                <FaHouseUser className="w-12 h-12 text-yellow-600 mb-4 mt-5" />
                <h3 className="text-xl text-center font-semibold text-gray-800 mb-4">Light Housekeeping</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Efficient light housekeeping, maintaining a clean and comfortable home environment with care. A tidy and organized living space contributes to your loved one&apos;s well-being.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
