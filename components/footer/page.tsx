import Image from 'next/image';
import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 gap-8">


          {/* Section 1 */}
          <div className="lg:ml-2 border-b border-gray-100 py-8 lg:border-b-0 lg:border-r lg:py-16 lg:pe-16">
            <div className="text-teal-600 lg:block">
              <Image
                src="/footer/logo.png"
                alt="logo"
                width={120}
                height={60}
                className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-48 h-auto"
              />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Home </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">About Us </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Services </a>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Careers</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">Resources </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Contact Us </a>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75"> Transportation to Medical Appointments </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">Assistance with Activities of Daily Living </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-100 pt-8">
              <ul className="flex flex-wrap gap-4 text-xs">
                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 transition hover:opacity-75"> Cookies </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="border-b border-gray-100 py-8 lg:border-b-0 lg:border-r lg:py-16 lg:pe-16">
            <div className="mt-8 space-y-4 lg:mt-0">
              <span className="hidden h-1 w-10 rounded bg-teal-500 lg:block"></span>
              <div>
                <h3 className="font-medium text-gray-900">Leadership</h3>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <li>Asha Chowdhury - President</li>
                  <li>Nazir Ullah - Vice President</li>
                </ul>
              </div>
              <div className="flex flex-col items-start mb-8">
                <div className="flex items-center mb-4">
                  <FaPhone className="text-teal-500 mr-3" />
                  <a href="tel:925-237-8403" className="text-gray-700 hover:text-teal-500">Call Us: 925-237-8403</a>
                </div>
                <div className="flex items-center mb-4">
                  <FaEnvelope className="text-teal-500 mr-3" />
                  <a href="mailto:jamy88876@gmail.com" className="text-gray-700 hover:text-teal-500">Email Us: jamy88876@gmail.com</a>
                </div>
                <div className="relative w-32 h-32">
                  <Image
                    src="/footer/qrcode.png"
                    alt="QR Code"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 - Map */}
          <div className="py-8 lg:py-16">
            <div className="relative w-full h-64 overflow-hidden rounded-lg">
              <iframe
                className="absolute inset-0 w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Zayan Contracting LLC. All rights reserved.</p>
          <p className="text-xs">Designed and developed by <a href="https://techwoozy.vercel.app/" className="text-teal-500 hover:underline">Techwoozy LLC</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
