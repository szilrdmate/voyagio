import Hero from "../components/Hero";
import About from "../components/About";
import Accordion from "../components/Accordion";
import InfiniteCarousel from "../components/Carousel";

const Home = () => {
  return (
    <>
      <Hero />
      <InfiniteCarousel />
      <About />
      <Accordion />
    </>
  );
};

export default Home;
