"use client";
import React, { useState } from 'react';
import { ClerkLoaded, SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <header className="bg-white shadow-md sticky-header lg:p-5 md:p-2 ">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-gray-900" href="/">
              <Image
                src={`/header/logo.png`}
                alt="logo"
                width={240}
                height={60}
                className="w-[50px] xl:w-24 sm:w-48 md:w-24 lg:w-[100px]"
              />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a className="text-gray-700 transition hover:text-gray-900" href="/"> Home </a>
                </li>
                <li>
                  <a className="text-gray-700 transition hover:text-gray-900" href="/services"> Services </a>
                </li>
                <li>
                  <a className="text-gray-700 transition hover:text-gray-900" href="/projects"> Projects </a>
                </li>
                <li>
                  <a className="text-gray-700 transition hover:text-gray-900" href="/contact"> Contact </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <ClerkLoaded>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                  <SignedOut>
                    <SignInButton mode="modal">
                      <a
                        className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow transition hover:bg-blue-700"
                        href="#"
                      >
                        Login
                      </a>
                    </SignInButton>
                  </SignedOut>
                </ClerkLoaded>
              </div>
              <div className="block md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 bg-white p-6 shadow-lg transition-transform transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          onClick={toggleMobileMenu}
          className="text-gray-600 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <nav aria-label="Mobile" className="mt-6">
          <ul className="space-y-4">
            <li>
              <a className="text-gray-700 hover:text-gray-900" href="/"> Home </a>
            </li>
            <li>
              <a className="text-gray-700 hover:text-gray-900" href="/services"> Services </a>
            </li>
            <li>
              <a className="text-gray-700 hover:text-gray-900" href="/projects"> Projects </a>
            </li>
            <li>
              <a className="text-gray-700 hover:text-gray-900" href="/contact"> Contact </a>
            </li>
            <li>
              <ClerkLoaded>
                <SignedIn>
                  <UserButton />
                </SignedIn>
                <SignedOut>
                  <SignInButton mode="modal">
                    <a
                      className="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow transition hover:bg-blue-700"
                      href="#"
                    >
                      Login
                    </a>
                  </SignInButton>
                </SignedOut>
              </ClerkLoaded>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
