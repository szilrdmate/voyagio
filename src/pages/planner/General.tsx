import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill, faMoneyBillTransfer, faLanguage, faEarthAmericas, faTemperatureHalf, faCity } from "@fortawesome/free-solid-svg-icons";
import { GeneralProps, StatItemProps } from "../../types/GeneralProps";

const StatItem: React.FC<StatItemProps> = ({ icon, content }) => (
	<div className="flex items-center">
		<FontAwesomeIcon className="h-6 w-6 rounded-full bg-gray-200 p-2 text-xl text-gray-800" icon={icon} />
		<p className="text-md ml-4 font-medium text-gray-800">{content}</p>
	</div>
);

const General: React.FC<GeneralProps> = ({ stats, setState }) => {
	const handleSetState = useCallback(() => setState(true), [setState]);

	return (
		<div className="px-8 py-10">
			<div className="mb-8 space-x-2">
				<button onClick={handleSetState} className="rounded-full border-2 border-gray-800 bg-transparent px-6 py-1 text-lg font-semibold text-gray-800 duration-150 hover:bg-gray-800 hover:text-white">
					Overview
				</button>
				<button className="rounded-full border-2 border-gray-800 bg-gray-800 px-6 py-1 text-lg font-semibold text-white">General Information</button>
			</div>
			<div className="grid w-full grid-cols-2 grid-rows-3 gap-6">
				<StatItem icon={faMoneyBill} content={stats.currency} />
				<StatItem icon={faMoneyBillTransfer} content={stats.oneDollarInLocalCurrency} />
				<StatItem icon={faCity} content={stats.capitalOfTheCountry} />
				<StatItem icon={faTemperatureHalf} content={stats.localWeather} />
				<StatItem icon={faEarthAmericas} content={stats.timeThereInUtcFormat} />
				{stats.languagesSpoken.map((language, index) => (
					<StatItem key={index} icon={faLanguage} content={language} />
				))}
			</div>
		</div>
	);
};

export default General;
