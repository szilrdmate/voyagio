import Hero from "./Hero";
import About from "./About";
import Accordion from "./Accordion";
import Footer from "../../components/ui/Footer";
import CtaSection from "./CtaSection";

const Home = () => {
	return (
		<>
			<Hero />
			<About />
			<CtaSection />
			<Accordion />
			<Footer />
		</>
	);
};

export default Home;
