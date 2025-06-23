'use client';

import { HomeContant } from '@/lib/Contants';

import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 bg-white h-[100vh] w-full py-12 space-y-10 text-gray-800 uppercase pl-28"
      style={{ fontFamily: 'sans-serif' }}
    >
      <div className="space-y-10 -mt-[20px]">
        <Image
          src="/logo.webp"
          width={300}
          height={400}
          alt="Logo"
          className="w-36 mb-4"
        />
        <h2 className="font-normal text-lg mt-28">
          {HomeContant.footer.title1}
        </h2>
        <a href={`${HomeContant.footer.addresshref}`}>
          <h2 className="text-xl">{HomeContant.footer.address}</h2>
        </a>
        <h2 className="text-lg">{`${HomeContant.footer.phone}`}</h2>
        <a href={`${HomeContant.footer.email}`}>
          <h2 className="text-xl uppercase">info@zaloscafe.co.uk</h2>
        </a>
      </div>

      <div className="space-y-7 mt-36 pl-20">
        <h2 className="hover:underline cursor-pointer">Home</h2>
        <h2 className="hover:underline cursor-pointer">Menu</h2>
        <h2 className="hover:underline cursor-pointer">Products</h2>
        <h2 className="hover:underline cursor-pointer">Reservation</h2>
        <h2 className="hover:underline cursor-pointer">Contact Us</h2>
      </div>

      <div className="space-y-10 mt-20 pr-28">
        <h2 className="font-normal text-lg mb-2 ">
          {HomeContant.footer.title2}
        </h2>

        <div className="flex justify-between border-b pb-1 mt-10">
          <h2>{HomeContant.workingdays.day1}</h2>
          <h2>{HomeContant.workingstime.time1}</h2>
        </div>
        <div className="flex justify-between border-b pb-1">
          <h2>{HomeContant.workingdays.day2}</h2>
          <h2>{HomeContant.workingstime.time2}</h2>
        </div>
        <div className="flex justify-between border-b pb-1">
          <h2>{HomeContant.workingdays.day3}</h2>
          <h2>{HomeContant.workingstime.time3}</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
