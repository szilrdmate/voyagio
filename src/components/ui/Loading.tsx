import React, { useState, useEffect } from "react";

const Loading: React.FC = () => {
	const [dots, setDots] = useState("");

	useEffect(() => {
		const interval = setInterval(() => {
			setDots((prevDots) => {
				if (prevDots.length < 3) {
					return prevDots + ".";
				} else {
					return "";
				}
			});
		}, 400); // Adjust the interval time as needed

		return () => clearInterval(interval); // Cleanup interval on component unmount
	}, []);

	return (
		<div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-40 backdrop-blur-lg">
			<h2 className="text-5xl font-bold text-white">Planning Your Trip</h2>
			<p className="w-5 text-5xl font-bold text-white">{dots}</p>
		</div>
	);
};

export default Loading;
