import React from "react";
import { CardProps } from "../../types/CardProps";

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
	return (
		<div className="hover-scale-first-child mx-2 inline-block w-1/3 min-w-[325px] overflow-hidden rounded-2xl border-[1px] border-gray-300 border-opacity-40 bg-white shadow-lg hover:cursor-pointer">
			<img src={imageUrl} alt={title} className="h-40 w-full object-cover" />
			<div className="p-4">
				<h3 className="mb-2 font-bold text-gray-800">{title}</h3>
				<p className="text-sm text-gray-600">{description}</p>
			</div>
		</div>
	);
};

export default Card;
