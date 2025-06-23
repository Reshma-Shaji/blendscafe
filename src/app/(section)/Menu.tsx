'use client';
import { HomeContant } from '@/lib/Contants';
import Image from 'next/image';

const Menu = () => {
  {
    HomeContant.menu.menuItems;
  }

  return (
    <section className="bg-[#fa559a] w-full h-full flex items-center justify-center px-4 py-12">
      <div className="flex flex-col md:flex-row w-full max-w-7xl h-full">
        <div className="bg-white w-full md:w-1/2 h-[100vh] py-10 px-6 md:px-12 flex flex-col justify-start -mt-16">
          <h2
            className="text-[32px] md:text-[50px] h-[100px] font-bold uppercase mb-10 text-[#fa559a]"
            style={{ fontFamily: 'sofia sans' }}
          >
            {HomeContant.menu.title}
          </h2>

          <div className="space-y-10">
            {HomeContant.menu.menuItems.map((item, index) => (
              <div key={index} style={{ fontFamily: 'sans-serif' }}>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl md:font-extralight uppercase text-gray-800">
                    {item.title}
                  </h3>
                  <span className="text-md md:text-xl text-gray-600 md:font-extralight">
                    {item.price}
                  </span>
                </div>
                <p className="text-lg md:text-xl md:font-extralight text-gray-500 mt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center overflow-hidden mt-[130px]">
          <Image
            src="/menu.webp"
            alt="menu image"
            width={300}
            height={400}
            className="w-full max-w-[400px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Menu;
