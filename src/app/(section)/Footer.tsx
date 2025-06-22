import React from 'react';

const Footer = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12  space-y-10 text-gray-800 uppercase"
      style={{ fontFamily: 'sans-serif' }}
    >
      <div className="space-y-10 -mt-[50px]">
        <img src="logo.webp" alt="Logo" className="w-36 mb-4" />
        <h2 className="font-normal text-lg mt-10">CONTACT</h2>
        <h2 className="text-xl">
          69-71 London Rd, Stockton
          <br /> Heath, Warrington WA4 6SG,
          <br /> United Kingdom
        </h2>
        <h2 className="text-lg">01925 269369</h2>
        <h2 className="text-xl">info@zaloscafe.co.uk</h2>
      </div>

      <div className="space-y-7">
        <h2 className="hover:underline cursor-pointer">Home</h2>
        <h2 className="hover:underline cursor-pointer">Menu</h2>
        <h2 className="hover:underline cursor-pointer">Products</h2>
        <h2 className="hover:underline cursor-pointer">Reservation</h2>
        <h2 className="hover:underline cursor-pointer">Contact Us</h2>
      </div>

      <div className="space-y-10">
        <h2 className="font-normal text-lg mb-2 ">Opening Hours</h2>

        <div className="flex justify-between border-b pb-1">
          <h2>Tuesday - Thursday</h2>
          <h2>8 AM - 11 PM</h2>
        </div>
        <div className="flex justify-between border-b pb-1">
          <h2>Friday - Saturday</h2>
          <h2>9 AM - 11 PM</h2>
        </div>
        <div className="flex justify-between border-b pb-1">
          <h2>Sunday</h2>
          <h2>9 AM - 10 PM</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
