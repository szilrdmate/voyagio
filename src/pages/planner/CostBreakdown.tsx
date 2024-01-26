import React, { useState, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBed, faTaxi, faTicket, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { EstimatedCostsProps } from "../../types/CostBreakdownTypes";

const CostCategory: React.FC = ({ icon, title, costs }) => (
	<div>
		<h3 className="text-lg font-semibold text-gray-800">
			<FontAwesomeIcon icon={icon} className="mr-2 w-8 text-xl" />
			{title}
		</h3>
		<div className="mb-8 grid grid-cols-2 grid-rows-2 gap-4">
			{costs.map((cost, index) => (
				<div key={index} className="p-4">
					<h4 className="mb-2 text-gray-500">{cost.name}</h4>
					<p className="text-lg font-medium text-gray-800">{cost.value}$</p>
				</div>
			))}
		</div>
	</div>
);

const CostBreakdown: React.FC<EstimatedCostsProps> = ({ estimatedCosts }) => {
	const [isCollapsed, setIsCollapsed] = useState(true);

	if (!estimatedCosts) {
		return <div>Loading...</div>;
	}

	const toggleCollapse = () => setIsCollapsed((prevState) => !prevState);

	const costCategories = useMemo(() => {
		return [
			{ icon: faBed, title: "Accommodation", costs: estimatedCosts[0] },
			{ icon: faTaxi, title: "Transport", costs: estimatedCosts[1] },
			{ icon: faUtensils, title: "Food", costs: estimatedCosts[2] },
			{
				icon: faTicket,
				title: "Activities",
				costs:
					estimatedCosts[3]?.mainActivityForEachDay?.map((activity) => ({
						name: activity.mainActivityName,
						value: activity.costOfProgram,
					})) || [],
			},
		];
	}, [estimatedCosts]);

	return (
		<div className="pb-12">
			<div className="mb-6 flex space-x-4">
				<button onClick={toggleCollapse}>
					<FontAwesomeIcon className="text-2xl text-gray-800" icon={faChevronDown} rotation={isCollapsed ? undefined : 270} />
				</button>
				<h2 className="text-3xl font-black text-gray-800">Cost Breakdown (USD)</h2>
			</div>
			{!isCollapsed && costCategories.map((category, index) => <CostCategory key={index} icon={category.icon} title={category.title} costs={category.costs} />)}
		</div>
	);
};

export default CostBreakdown;
