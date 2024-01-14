import Hero from "../components/Hero";
import About from "../components/About";
import Accordion from "../components/Accordion";
import InfiniteCarousel from "../components/Carousel";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <InfiniteCarousel />
      <About />
      <Accordion />
      <Footer />
    </>
  );
};

export default Home;
