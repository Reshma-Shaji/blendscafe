'use client';
import Image from 'next/image';

const Explore = () => {
  const menuItems = [
    { name: 'BREAKFAST', img: '/image1.webp' },
    { name: 'BREAKFAST', img: '/image2.webp' },
    { name: 'BREAKFAST', img: '/image3.webp' },
  ];

  return (
    <section className="relative bg-[#fa559a] w-full min-h-screen py-20 px-4 flex flex-col items-center justify-center overflow-hidden">
      {/* Large heading partially behind images */}
      <h1
        className="absolute top-[25%] -translate-x-1/2 -translate-y-1/2 text-[40px] md:text-[80px] lg:text-[120px] font-medium tracking-tighter text-white/10 uppercase z-0 text-center leading-none whitespace-nowrap"
        style={{ fontFamily: 'sofia sans' }}
      >
        EXPLORE OUR MENU
      </h1>

      {/* Foreground images with names */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-7xl">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={item.img}
              alt={item.name}
              width={300}
              height={400}
              className="w-[300px] md:w-[400px] h-auto object-contain rounded-md shadow-xl"
            />
            <p
              className="mt-4 text-white text-[20px] md:text-[24px] font-bold text-center"
              style={{ fontFamily: 'sofia sans' }}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;
