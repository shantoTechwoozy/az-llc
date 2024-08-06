'use client';
import React, { useState } from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaEnvelope, FaPhone, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';
import Announcement from '@/components/announcement/page';

const Career: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files![0] : value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate form submission process
    setTimeout(() => {
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        resume: null
      });
    }, 1000); // Simulate network delay
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-12">
      <Announcement />
      {/* Banner Section */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <Image
          src="/career/career.jpg"
          alt="Career Banner"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-white">
            Join Our Team!
          </h1>
          <p className="text-sm md:text-lg mb-8 text-white">
            Explore career opportunities at AZ Transportation and Care Services LLC. We are committed to providing excellent care and are always looking for dedicated professionals to join our team.
          </p>
          <a href="#apply-now" className="bg-white text-blue-500 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 inline-flex items-center">
            Apply Now <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Success Popup */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-gray-800 mb-4">Application Submitted!</h2>
              <p className="text-gray-600 mb-4">Thank you for applying to AZ Transportation and Care Services LLC. We will review your application and get back to you soon.</p>
              <button
                onClick={() => setShowSuccess(false)}
                className="bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <section id="apply-now" className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaBriefcase className="w-6 h-6 text-blue-500 mr-2" />
            Current Openings
          </h2>
          <div className="space-y-6">
            {/* Job listings */}
            {[
              {
                title: 'Home Care Aide',
                description: 'We are seeking a compassionate Home Care Aide to provide exceptional care and support to our clients in their homes. Responsibilities include assisting with daily living activities, medication reminders, and providing emotional support.',
                location: 'Antioch, CA',
              },
              {
                title: 'Personal Care Assistant',
                description: 'We are looking for a dedicated Personal Care Assistant to support our clients with their personal care needs. Duties include helping with grooming, bathing, and providing companionship.',
                location: 'Antioch, CA',
              },
              {
                title: 'Care Coordinator',
                description: 'We are seeking a Care Coordinator to manage care plans and ensure our clients receive the highest quality of care. Responsibilities include coordinating care services, managing schedules, and communicating with clients and their families.',
                location: 'Antioch, CA',
              },
              {
                title: 'Administrative Assistant',
                description: 'We are looking for an Administrative Assistant to support our office operations. Duties include handling communications, scheduling, and assisting with various administrative tasks.',
                location: 'Antioch, CA',
              }
            ].map((job, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-2">{job.description}</p>
                <p className="text-gray-600 mb-2 flex items-center">
                  <FaMapMarkerAlt className="w-5 h-5 text-green-500 mr-2" />
                  {job.location}
                </p>
                <a href="#" className="text-blue-500 hover:underline flex items-center">
                  Apply Now <FaArrowRight className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <FaEnvelope className="w-6 h-6 text-blue-500 mr-2" />
            Submit Your Application
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-lg shadow-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-lg shadow-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-lg shadow-sm"
              />
            </div>
            <div>
              <label htmlFor="resume" className="block text-gray-700">Resume (PDF)</label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleChange}
                className="mt-1 block w-full p-2 text-black border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-lg shadow-md hover:bg-blue-600"
              >
                Submit Application
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Career;
