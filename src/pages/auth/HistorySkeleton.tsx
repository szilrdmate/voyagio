import React from "react";
import { FragmentType } from "../../types/HistorySkeletonType";

const HistorySkeleton: React.FC<FragmentType> = ({ times }) => {
	const items = [];

	for (let i = 0; i < times; i++) {
		items.push(
			<li key={i} className="flex items-center justify-between rounded-2xl border border-gray-300 border-opacity-20 bg-white px-8 py-4 shadow-xl">
				<div className="space-y-2">
					<p className="w-64 animate-pulse rounded-lg bg-gray-200 p-4"></p>
					<p className="w-32 animate-pulse rounded-lg bg-gray-200 p-4"></p>
				</div>
				<div className="flex space-x-2">
					<button className="h-10 w-10 animate-pulse rounded-xl border-2 border-gray-200 text-white"></button>
					<button className="bordr-2 h-10 w-10 animate-pulse rounded-xl bg-gray-200 text-gray-200"></button>
				</div>
			</li>
		);
	}

	return <ul className="space-y-4">{items}</ul>;
};

export default HistorySkeleton;
