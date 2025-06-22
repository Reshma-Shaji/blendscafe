const Testimonials = () => {
  const stars = '★ ★ ★ ★ ★';

  return (
    <section className="w-full bg-white px-6 py-12">
      <h2
        className=" text-[#fa559a] text-6xl md:text-7xl font-bold text-center mb-12 uppercase tracking-widest"
        style={{ fontFamily: '9sofia sans' }}
      >
        Reviews
      </h2>

      <div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        style={{ fontFamily: 'sans-serif' }}
      >
        {/* Testimonial 1 */}
        <div className="bg-[#fa559a] p-6 text-center">
          <div className="text-white text-3xl mb-4 gap-6">{stars}</div>
          <p className="text-white text-[22px]">
            We visited Fusion Clan yesterday for a Vishu Sadya and were
            extremely happy with both the hospitality and the food. Every dish
            was exceptional, making it hard to pick a favorite. I would
            definitely recommend this place, whether.
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-[#fa559a] p-6 text-center">
          <div className="text-white text-3xl mb-4">{stars}</div>
          <p className="text-white text-[22px]">
            The food in here is so good. Really worth visiting. The seafood
            platter is astonishing. The traditional dessert Pradhaman was a
            surprise and really delicious.
          </p>
        </div>

        <div className="bg-[#fa559a] p-10 text-center">
          <div className="text-white text-3xl mb-4">{stars}</div>
          <p className="text-white text-[22px]">
            5 Stars! Fusion Clan is an absolute gem in Warwick! The food is
            bursting with authentic Indian flavors, beautifully presented, and
            perfectly spiced. The staff are warm, attentive,
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
