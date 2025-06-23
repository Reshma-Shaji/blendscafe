'use client';
import Image from 'next/image';
import React from 'react';

const Scrollus = () => {
  return (
    <div className="w-full px-4 py-12 bg-white">
      <h2
        className=" text-[#fa559a] text-6xl md:text-7xl font-bold text-center mb-12 uppercase tracking-widest"
        style={{ fontFamily: '9sofia sans' }}
      >
        SCROLL US
      </h2>

      <div className="grid grid-rows-2 gap-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative w-full h-[300px] overflow-hidden rounded-lg shadow-md">
            <Image
              src="image.webp"
              width={300}
              height={400}
              alt="Image 1"
              className="w-[500px] h-[400px] object-cover"
            />
            <h1 className="absolute top-4 left-4 text-white text-2xl font-bold drop-shadow-md">
              SCROLL US
            </h1>
          </div>

          <div className="w-full h-[300px] overflow-hidden rounded-lg shadow-md">
            <Image
              src="1.webp"
              width={300}
              height={400}
              alt="Image 2"
              className="w-[500px] h-[400px] object-cover"
            />
          </div>

          <div className="bg-[#fa559a] w-full h-[300px] rounded-lg flex items-center justify-center text-white text-center px-4">
            <h1
              className="text-lg md:text-xl leading-relaxed"
              style={{ fontFamily: 'sofia sans' }}
            >
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit.
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#fa559a] w-full h-[300px] rounded-lg flex flex-col items-center justify-center text-white text-center">
            <Image
              className="h-6 w-6 mb-2"
              width={300}
              height={400}
              src="insta.jpg"
              alt="Instagram"
            />
            <h1 className="text-lg font-semibold">@LOREMIPSUM</h1>
          </div>

          <div className="relative w-full h-[300px] overflow-hidden rounded-lg shadow-md">
            <Image
              src="1 (1).webp"
              width={300}
              height={400}
              alt="Image 3"
              className="w-[500px] h-[400px] object-cover"
            />
            <h1 className="absolute top-4 left-4 text-white text-2xl font-bold drop-shadow-md">
              SCROLL US
            </h1>
          </div>

          <div className="relative w-full h-[300px] overflow-hidden rounded-lg shadow-md">
            <Image
              src="image.webp"
              width={300}
              height={400}
              alt="Image 4"
              className="w-[500px] h-[400px] object-cover"
            />
            <h1 className="absolute top-4 right-4 text-white text-2xl font-bold drop-shadow-md text-right">
              SCROLL US
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scrollus;
