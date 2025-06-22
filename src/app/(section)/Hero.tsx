// const Hero = () => {
//   return (
//     <section className="relative bg-gray-300 w-full h-screen flex items-center justify-center px-4">
//       <div className="text-center">
//         {/* Title */}
//         <h1 className="text-black text-6xl md:text-8xl font-semibold">CAFE</h1>

//         {/* Paragraph */}
//         <p className="mt-6 text-left mx-auto max-w-xs md:max-w-md text-white text-base md:text-xl font-semibold uppercase whitespace-pre-line leading-relaxed">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Hero;

const Hero = () => {
  return (
    <section
      className="w-full h-screen bg-[#dedcdc] flex flex-col items-center justify-center text-center px-4"
      style={{ fontFamily: 'sofia sans' }}
    >
      <h1 className="text-[60px] md:text-[100px] font-normal text-black leading-none">
        CAFE
      </h1>

      <p className="mt-6 text-sm md:text-lg text-black font-bold leading-relaxed uppercase text-left max-w-xs md:max-w-md">
        Lorem ipsum dolor sit
        <br />
        amet, consectetur
        <br />
        adipiscing elit.
      </p>
    </section>
  );
};

export default Hero;
