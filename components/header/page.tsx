'use client';
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Menu = () => {
    const [nav, setNav] = useState(false);

    const links = [
      { id: 1, link: "home", label: "Home" },
      { id: 2, link: "about", label: "About Us" },
      { id: 3, link: "services", label: "Services" },
      { id: 4, link: "careers", label: "Careers" },
      { id: 5, link: "resources", label: "Resources" },
      { id: 6, link: "contact", label: "Contact Us" },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 bg-white fixed top-0 left-0 z-50">
            <div>
                <h1 className="text-5xl font-signature ml-2">
                    <a
                        className="link-underline link-underline-black text-black"
                        href=""
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={220}
                            height={60}
                            className="w-24 sm:w-32 md:w-48 lg:w-56 xl:w-64 h-auto header-logo"
                        />
                    </a>
                </h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-black duration-200 link-underline"
                    >
                        <Link href={`#${link}`}>{link}</Link>
                    </li>
                ))}
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                            <Link onClick={() => setNav(!nav)} href={`#${link}`}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Menu;
