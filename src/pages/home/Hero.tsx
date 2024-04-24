import { Link } from "react-router-dom";
import TypingEffect from "./TypeEffect";

const Hero = () => {
	return (
		<div className="flex w-full items-center justify-center border-gray-300 bg-gradient-to-b from-blue-700 via-blue-500 to-white px-6  pb-36 pt-40">
			<div className="mx-auto max-w-3xl">
				<h1 className="mb-4 text-center text-5xl font-bold leading-tight text-white sm:text-7xl">
					Let AI Be Your <span className="text-yellow-500">Personal Travel Assistant...</span>
				</h1>
				<h2 className="text-md mb-8 w-full text-center font-medium uppercase leading-loose tracking-widest text-gray-200">Travel hassle-free, and without worries</h2>
				<TypingEffect />
				<Link to="/planner">
					<div className="button mx-auto mt-8 flex h-16 max-w-lg items-center justify-center rounded-2xl border border-sky-500 bg-gradient-to-b from-sky-400 to-sky-500 text-2xl text-white shadow-xl transition-transform duration-300 ease-in-out hover:scale-[1.02]">Get Planning - It's Free</div>
				</Link>
			</div>
		</div>
	);
};

export default Hero;
