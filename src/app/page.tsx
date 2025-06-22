import Navbar from '@/Components/Navbar';
import Hero from './(section)/Hero';
import BigHand from './(section)/BigHand';
import Slide from './(section)/Slide';
import Explore from './(section)/Explore';
import Menu from './(section)/Menu';
import Reserve from './(section)/Reserve';
import Review from './(section)/Review';
import Scrollus from './(section)/Scrollus';
import Footer from './(section)/Footer';

export default function Home() {
  return (
    <main className="relative flex h-full w-full overflow-hidden">
      <div className="flex h-full w-full flex-col">
        <div className="absolute w-full">
          <Navbar />
        </div>
        <Hero />
        <BigHand />
        <Slide />
        <Explore />
        <Menu />
        <Reserve />
        <Review />
        <Scrollus />
        <Footer />
      </div>
    </main>
  );
}
