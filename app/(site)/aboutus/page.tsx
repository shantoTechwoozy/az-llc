'use client';
import React from 'react';
import Image from 'next/image';
import { FaBuilding, FaHandshake, FaUsers, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Announcement from '@/components/announcement/page';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Announcement/>
      {/* Banner Section */}
      <div className="relative w-full h-64 md:h-80">
        <Image
          src="/about/aboutus.jpg" // Replace with the path to your image
          alt="About Us Banner"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-blue-600">
            About Us
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6 md:p-12">
        {/* Who We Are */}
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            AZ Transportation and Care Services LLC is more than just a care provider; we are a lifeline of support, a source of comfort, and a promise of exceptional care. When you choose us, you choose a brighter, more compassionate future for your loved one. Thank you for considering AZ Transportation and Care Services LLC! We look forward to being a part of your loved one's journey and making every moment count.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="relative w-full h-40 overflow-hidden rounded-lg shadow-lg">
              <Image src="/about/a1.jpg" alt="Caregiver with elderly woman" layout="fill" objectFit="cover" className="absolute inset-0" />
            </div>
            <div className="relative w-full h-40 overflow-hidden rounded-lg shadow-lg">
              <Image src="/about/a2.jpg" alt="Caregiver with elderly woman" layout="fill" objectFit="cover" className="absolute inset-0" />
            </div>
            <div className="relative w-full h-40 overflow-hidden rounded-lg shadow-lg">
              <Image src="/about/a3.jpg" alt="Caregiver with elderly man" layout="fill" objectFit="cover" className="absolute inset-0" />
            </div>
            <div className="relative w-full h-40 overflow-hidden rounded-lg shadow-lg">
              <Image src="/about/a4.jpg" alt="Caregiver hugging elderly woman" layout="fill" objectFit="cover" className="absolute inset-0" />
            </div>
          </div>
        </section>

        {/* Our Mission Statement */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-green-400 via-blue-500 to-blue-600 p-8 rounded-lg shadow-lg mb-6">
            <h2 className="text-4xl font-bold text-white">Our Mission Statement</h2>
            <p className="text-lg text-gray-100 leading-relaxed mt-4">
              At AZ Transportation and Care Services LLC, our mission is to enhance your loved one's life with genuine care, respect, and unwavering dedication, enriching every home we touch. Every day, our compassionate caregivers strive to create moments of joy and promote a life of fulfillment for your loved ones. We believe that our mission is more than just a statement; it's a promise we keep with every action we take.
            </p>
          </div>
        </section>

        {/* Our Vision Statement */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-green-400 via-blue-500 to-blue-600 p-8 rounded-lg shadow-lg mb-6">
            <h2 className="text-4xl font-bold text-white">Bringing Bright Futures</h2>
            <p className="text-lg text-gray-100 leading-relaxed mt-4">
              At AZ Transportation and Care Services LLC, our vision is a future where every individual experiences the warmth of compassionate and personalized care within the familiar embrace of their own home. We envision a world where aging gracefully isn't defined by limitations but by the limitless potential for joy, comfort, and fulfillment. Our commitment to this vision is unwavering. We see a world where our caregivers are not just providers but trusted companions, where every task, every smile, and every moment of companionship contribute to a life enriched and cherished. With our hearts and hands, we strive to make this vision a reality, one home at a time.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At AZ Transportation and Care Services LLC, we stand out with unwavering commitment. Our compassionate caregivers, personalized care plans, and dedication to your loved one's well-being make us the trusted choice for exceptional home care services in Antioch, California.
          </p>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center">
            <FaPhone className="w-8 h-8 text-blue-500 mr-2" />
            Contact Us
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
            <p className="text-lg text-gray-700 mb-4">
              <FaEnvelope className="inline-block w-6 h-6 text-blue-500 mr-2" />
              Email: <a href="mailto:jamy88876@gmail.com" className="text-blue-500 hover:underline">jamy88876@gmail.com</a>
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <FaPhone className="inline-block w-6 h-6 text-blue-500 mr-2" />
              Phone: <a href="tel:925-237-8403" className="text-blue-500 hover:underline">925-237-8403</a>
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <FaMapMarkerAlt className="inline-block w-6 h-6 text-blue-500 mr-2" />
              Antioch, CA 94509
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
