import React from "react";
import { OverviewProps } from "../../types/OverviewType";

const Overview: React.FC<OverviewProps> = ({ info, setState }) => {
	return (
		<div className="px-8 py-10">
			<div className="mb-8 space-x-2">
				<button className="rounded-full border-2 border-gray-800 bg-gray-800 px-6 py-1 text-lg font-semibold text-white">Overview</button>
				<button onClick={() => setState(false)} className="rounded-full border-2 border-gray-800 bg-transparent px-6 py-1 text-lg font-semibold text-gray-800 duration-150 hover:bg-gray-800 hover:text-white">
					General Information
				</button>
			</div>
			<h2 className="mb-2 text-xl font-bold text-gray-800">Description</h2>
			<p className="text-md mb-4 text-justify font-medium text-gray-600">{info.shortDescription}</p>
			<h2 className="mb-2 text-xl font-bold text-gray-800">History</h2>
			<p className="text-md text-justify font-medium text-gray-600">{info.shortHistory}</p>
		</div>
	);
};

export default Overview;
