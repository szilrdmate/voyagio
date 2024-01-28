import React from "react";
import "../../styles/animations.css";
import { useNavigate } from "react-router-dom";
import ai from "../../assets/ai.webp";
import map from "../../assets/map.webp";
import passport from "../../assets/passport.webp";

const About: React.FC = () => {
	const navigate = useNavigate();

	const handleNaviagtion = () => {
		navigate("/planner");
	};
	const about = [
		{
			id: 1,
			title: "1. Configure Your Inputs/Needs",
			par: "Input your travel details such as destination, dates, budget, and interests. The more specific you are, the better the AI can tailor your itinerary to match your preferences.",
			src: map,
			cta: "Start Your Journey",
			alt: "Map illustration",
			bg: "bg-gradient-to-r from-sky-500 to-indigo-500",
		},
		{
			id: 2,
			title: "2. Wait for the Results",
			par: "After submitting your details, our AI works to create your personalized itinerary. This involves analyzing a wide range of travel data to ensure the best match for your trip. You'll be notified once your custom plan is ready.",
			src: ai,
			cta: "Travel The World",
			alt: "AI chip illustration",
			bg: "bg-gradient-to-bl from-sky-500 to-indigo-500",
		},
		{
			id: 3,
			title: "3. Explore Your Trip",
			par: "Review and customize the suggested itinerary. Make any changes to fit your needs, explore additional options, and save the final plan. Get ready to enjoy a journey that's uniquely tailored to you.",
			src: passport,
			cta: "Try It Out Today",
			alt: "Passport illustration",
			bg: "bg-gradient-to-br from-sky-500 to-indigo-500",
		},
	];

	return (
		<div style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.1), rgba(245,245,245,0.5),rgba(0,0,0,0)), url('https://img.freepik.com/premium-vector/vector-white-abstract-futuristic-background-with-perspective-infinity-grid-tile-floor-texture_547648-3196.jpg')" }} className="w-full bg-cover bg-center px-6 pb-40 pt-16">
			<h2 className="mx-auto mb-16 max-w-6xl text-5xl font-extrabold text-gray-800 ">How to Use Voyagio</h2>
			<div className="mx-auto max-w-6xl gap-8">
				{about.map((item, id) => (
					<div key={id} className="mb-8 flex flex-col justify-between gap-8 lg:flex-row">
						<div className="flex w-full items-center justify-center">
							<img className="aspect-square max-h-80" src={item.src} alt={item.alt} />
						</div>
						<div className="mx-auto max-w-xl rounded-3xl  bg-white px-8 py-10 shadow-lg backdrop-blur-xl">
							<h3 className="mb-4 text-3xl font-bold text-gray-800">{item.title}</h3>
							<p className="mb-8 text-justify text-lg font-medium leading-7 text-gray-400">{item.par}</p>
							<button onClick={handleNaviagtion} className={`${item.bg} w-full rounded-xl px-6 py-4 text-center text-xl font-bold text-white shadow-md transition-transform duration-150 hover:scale-[1.02]`}>
								{item.cta}
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default About;
