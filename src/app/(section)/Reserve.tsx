'use client';
import Image from 'next/image';

const Reserve = () => {
  return (
    <section className="w-full h-screen bg-[#fa559a] flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 gap-8">
      <div
        className="flex flex-col items-center justify-center text-white w-full md:w-1/2 space-y-6"
        style={{ fontFamily: 'sofia sans' }}
      >
        <h1 className="text-2xl md:text-6xl font-bold ">RESERVE</h1>
        <h2 className="text-[24px] md:text-[30px] leading-snug text-center uppercase font-semibold text-white -mt-5">
          Lorem <br />
          ipsum dolor sit
          <br /> amet, consectetur
          <br /> adipiscing elit. Lorem <br />
          ipsum dolor sit amet,
          <br /> consectetur adipiscing <br />
          elit.
        </h2>

        <button className="-mt-5 px-7 py-3 bg-black text-white font-semibold  hover:bg-gray-100 transition">
          RESERVE
        </button>
      </div>

      <div className="w-full md:w-1/2 h-[100vh] flex justify-between items-end ml-[40px]">
        <Image
          src="/image.webp"
          width={300}
          height={400}
          alt="Cafe"
          className="w-full max-w-[600px] rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Reserve;
