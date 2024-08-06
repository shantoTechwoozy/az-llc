'use client';
import React from 'react';
import { FaLink, FaStethoscope, FaHospital, FaUserMd, FaClinicMedical, FaMedkit } from 'react-icons/fa';
import Image from 'next/image';
import Announcement from '@/components/announcement/page';

const Resources: React.FC = () => {
  const resources = [
    { name: 'American Medical Association', url: 'https://www.ama-assn.org', icon: <FaStethoscope className="w-6 h-6 text-blue-500" /> },
    { name: 'American Health Care Association', url: 'https://www.ahcancal.org', icon: <FaHospital className="w-6 h-6 text-green-500" /> },
    { name: 'American Public Health Association', url: 'https://www.apha.org', icon: <FaUserMd className="w-6 h-6 text-orange-500" /> },
    { name: 'Mayo Clinic', url: 'https://www.mayoclinic.com', icon: <FaClinicMedical className="w-6 h-6 text-red-500" /> },
    { name: 'Medicare', url: 'https://www.medicare.gov', icon: <FaMedkit className="w-6 h-6 text-teal-500" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">
      <Announcement/>
      {/* Banner Section */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <Image
          src="/resource/resource.jpg"
          alt="Resources Banner"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-700 to-blue-500">
            Resources
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Helpful Resources</h1>
        <ul className="space-y-4">
          {resources.map((resource) => (
            <li key={resource.name} className="flex items-center p-4 rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition duration-300">
              <div className="mr-4">{resource.icon}</div>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-lg font-semibold"
              >
                {resource.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resources;
