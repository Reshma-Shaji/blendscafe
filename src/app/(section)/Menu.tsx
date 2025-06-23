'use client';
import Image from 'next/image';

const Menu = () => {
  const menuItems = [
    {
      title: 'ROASTED LAMB RUMP',
      description: 'Grilled lamb cutlets, pomegranate glaze, butternut squash',
      price: '$25',
    },
    {
      title: 'PAN SEARED SEA BASS',
      description: 'Saffron and mussel’s broth, new potatoes, edamame beans',
      price: '$38',
    },
    {
      title: 'KING PRAWNS AND LOBSTER',
      description: 'Creamy saffron, sauce Vierge',
      price: '$38',
    },
    {
      title: 'BEEF BURGER MEAL',
      description: 'Classic Greek salad, barrel aged feta cheese, bread',
      price: '$32',
    },
    {
      title: 'ROASTED LAMB RUMP',
      description: 'Grilled lamb cutlets, pomegranate glaze, butternut squash',
      price: '$25',
    },
  ];

  return (
    <section className="bg-[#fa559a] w-full min-h-screen flex items-center justify-center px-4 py-12">
      <div className="flex flex-col md:flex-row w-full max-w-7xl h-full">
        <div className="bg-white w-full md:w-1/2 h-[100vh] py-10 px-6 md:px-12 flex flex-col justify-start -mt-16">
          <h2
            className="text-[32px] md:text-[50px] h-[100px] font-bold uppercase mb-10 text-[#fa559a]"
            style={{ fontFamily: 'sofia sans' }}
          >
            MENU
          </h2>

          <div className="space-y-10">
            {menuItems.map((item, index) => (
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
