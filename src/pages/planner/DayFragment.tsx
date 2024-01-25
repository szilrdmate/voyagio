import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faClock } from "@fortawesome/free-solid-svg-icons";
import { ItineraryProps } from "../../types/DayFragmentTypes";

const DayFragment: React.FC<ItineraryProps> = ({ itinerary }) => {
	const [isCollapsed, setIsCollapsed] = useState(true);

	return (
		<div className="card w-full border-b border-gray-300 py-6">
			<div className="my-4 flex space-x-4">
				<button onClick={() => setIsCollapsed(!isCollapsed)}>
					<FontAwesomeIcon className="text-2xl text-gray-800" icon={faChevronDown} rotation={isCollapsed ? undefined : 270} />
				</button>
				<h3 className="text-2xl font-bold text-gray-800">Day {itinerary.day}</h3>
			</div>
			<h3 className="font-medium text-gray-600">{itinerary.date}</h3>
			{isCollapsed && (
				<div className="py-4">
					<ul className="space-y-4">
						{itinerary.program.map((activity) => (
							<li key={activity.id} className="rounded-lg border-[1px] border-gray-300 bg-white p-4 shadow-md">
								<p className="absolute left-6 h-6 w-6 -translate-y-6 rounded-full bg-gray-800 text-center font-semibold text-white">{activity.id}</p>
								<h3 className="mb-3 text-xl font-bold text-gray-800 underline">{activity.programOrPlaceName}</h3>
								<p className="mb-8 max-w-xl text-justify text-[0.9rem] font-medium leading-relaxed text-gray-500">{activity.shortDescriptionOfProgram}</p>
								<p className="text-sm font-bold tracking-wide text-gray-800">
									<FontAwesomeIcon className="mr-2" icon={faClock} /> {activity.timeSpentThere} • {activity.location}
								</p>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default DayFragment;
