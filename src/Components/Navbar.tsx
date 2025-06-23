'use client';
import { useState } from 'react';
import Image from 'next/image';
import { HomeContant } from '@/lib/Contants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="bg-transparent w-full px-4 py-20 md:px-8 lg:px-16 z-50 relative"
      style={{ fontFamily: 'sofia sans' }}
    >
      <div className="flex items-center justify-between">
        <Image
          src="/logo.webp"
          width={100}
          height={40}
          alt="logo"
          className="h-auto w-[90px]"
        />

        <div className="hidden md:flex gap-20 font-bold text-sm text-gray-700 uppercase">
          <a href={`${HomeContant.navbar.link1}`}>
            {HomeContant.navbar.title1}
          </a>
          <a href={`${HomeContant.navbar.link2}`}>
            {HomeContant.navbar.title2}
          </a>
          <a href={`${HomeContant.navbar.link3}`}>
            {HomeContant.navbar.title3}
          </a>
          <a href={`${HomeContant.navbar.link4}`}>
            {HomeContant.navbar.title4}
          </a>
        </div>

        <div className="hidden md:block">
          <button className="bg-black text-white px-6 py-2 text-sm font-semibold shadow">
            RESERVE
          </button>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-2xl font-bold text-black"
        >
          ☰
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-[300px] bg-white z-[100] p-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <Image
            src="/logo.webp"
            width={300}
            height={400}
            alt="logo"
            className="h-auto w-[100px]"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold text-black border-sm border-black -mt-5"
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col gap-6 text-[22px] text-gray-800 mt-5">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <button>Table Booking</button>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-[99]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
