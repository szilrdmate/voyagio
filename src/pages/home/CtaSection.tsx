import React from "react";
import { useNavigate } from "react-router-dom";

const CtaSection: React.FC = () => {
	const navigate = useNavigate();

	const goPlan = () => {
		navigate("/planner");
	};

	return (
		<div className="border border-t-gray-300 bg-white px-6 pb-28 pt-16">
			<div className="mx-auto flex h-96 max-w-6xl flex-col items-center justify-evenly rounded-3xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white">
				<h2 className="max-w-3xl text-center text-4xl font-bold leading-snug">Begin your hassle-free adventure with Trip Planner AI, your complimentary guide to effortless travel planning.</h2>
				<button onClick={goPlan} className="trasnition-transform rounded-2xl bg-gradient-to-b from-sky-400 to-sky-500 px-8 py-4 text-3xl font-semibold shadow-lg duration-150 ease-in-out hover:scale-[1.02]">
					Experience it now
				</button>
			</div>
		</div>
	);
};

export default CtaSection;
