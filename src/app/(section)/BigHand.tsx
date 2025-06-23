'use client';
import Image from 'next/image';

const BigHand = () => {
  return (
    <section className="relative w-full h-screen bg-white overflow-hidden flex items-center justify-center px-4 md:px-16">
      <h1
        className="absolute top-1/2 left-[900px] -mt-6 -translate-x-1/2 -translate-y-1/2 text-[80px] md:text-[150px] lg:text-[260px] font-medium tracking-tighter text-black uppercase z-0 text-center leading-none"
        style={{ fontFamily: 'sofia sans' }}
      >
        CROISSANTC
      </h1>
      <h1
        className="absolute top-1/5 left-[850px] -translate-x-1/2 -translate-y-1/2 text-[80px] md:text-[150px] lg:text-[260px] font-medium tracking-tighter text-black uppercase z-0 text-center leading-none"
        style={{ fontFamily: 'sofia sans' }}
      >
        CROISSANTCAFE
      </h1>

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between mt-[680px] gap-10">
        <div className="w-full md:w-1/2 text-black text-lg font-bold uppercase leading-relaxed space-y-7">
          <p style={{ fontFamily: 'sofia sans' }}>
            LOREM IPSUM DOLOR SIT <br /> AMET, CONSECTETUR <br /> ADIPISCING
            ELIT. NULLA
            <br />
            FACILISI. PELLENTESQUE <br /> HABITANT MORBI TRISTIQUE <br />
            SENECTUS ET NETUS ET
            <br />
            MALESUADA FAMES AC <br />
            TURPIS EGESTAS.
          </p>
          <p>
            LOREM IPSUM DOLOR SIT <br /> AMET, CONSECTETUR <br /> ADIPISCING
            ELIT. NULLA
            <br />
            FACILISI. PELLENTESQUE <br /> HABITANT MORBI TRISTIQUE <br />{' '}
            SENECTUS ET NETUS ET
            <br />
            MALESUADA FAMES AC <br />
            TURPIS EGESTAS.
          </p>
        </div>

        <div className="w-full md:w-auto max-w-[800px] md:max-w-[600px] lg:max-w-[950px] -mt-[300px]">
          <Image
            src="/hand.webp"
            alt="Croissant"
            width={900}
            height={400}
            className="w-full mx-w-[950px] h-[750px]"
          />
        </div>

        <div className="ml-[100px] -mt-40 w-full md:w-1/3 flex flex-col items-start md:items-end text-lg text-black font-bold uppercase space-y-6">
          <p style={{ fontFamily: 'sofia sans' }}>
            LOREM IPSUM DOLOR SIT <br /> AMET, CONSECTETUR <br /> ADIPISCING
            ELIT.
          </p>
          <button className="bg-black text-white mr-20 px-6 py-2 text-xs uppercase tracking-wider">
            Reserve
          </button>
        </div>
      </div>
    </section>
  );
};
export default BigHand;
