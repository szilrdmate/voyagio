// components/General.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill, faMoneyBillTransfer, faLanguage, faEarthAmericas, faTemperatureHalf, faCity } from "@fortawesome/free-solid-svg-icons";
import { GeneralProps } from "../../types/GeneralProps";

const General: React.FC<GeneralProps> = ({ stats, setState }) => {
	return (
		<div className="px-8 py-10">
			<div className="mb-8 space-x-2">
				<button onClick={() => setState(true)} className="rounded-full border-2 border-gray-800 bg-transparent px-6 py-1 text-lg font-semibold text-gray-800 duration-150 hover:bg-gray-800 hover:text-white">
					Overview
				</button>
				<button className="rounded-full border-2 border-gray-800 bg-gray-800 px-6 py-1 text-lg font-semibold text-white">General Information</button>
			</div>
			<div className="grid w-full grid-cols-2 grid-rows-3 gap-6">
				<div className="flex items-center">
					<FontAwesomeIcon className="h-6 w-6 rounded-full bg-gray-200 p-2 text-xl text-gray-800" icon={faMoneyBill} />
					<p className="text-md ml-4 font-medium text-gray-800">{stats.currency}</p>
				</div>
				<div className="flex items-center">
					<FontAwesomeIcon className="h-6 w-6 rounded-full bg-gray-200 p-2 text-xl text-gray-800" icon={faMoneyBillTransfer} />
					<p className="text-md ml-4 font-medium text-gray-800">{stats.oneDollarInLocalCurrency}</p>
				</div>
				<div className="flex items-center">
					<FontAwesomeIcon className="h-6 w-6 rounded-full bg-gray-200 p-2 text-xl text-gray-800" icon={faCity} />
					<p className="text-md ml-4 font-medium text-gray-800">{stats.capitalOfTheCountry}</p>
				</div>
				<div className="flex items-center">
					<FontAwesomeIcon className="h-6 w-6 rounded-full bg-gray-200 p-2 text-xl text-gray-800" icon={faTemperatureHalf} />
					<p className="text-md ml-4 font-medium text-gray-800">{stats.localWeather}</p>
				</div>
				<div className="flex items-center">
					<FontAwesomeIcon className="h-6 w-6 rounded-full bg-gray-200 p-2 text-xl text-gray-800" icon={faEarthAmericas} />
					<p className="text-md ml-4 font-medium text-gray-800">{stats.timeThereInUtcFormat}</p>
				</div>
				<div className="flex items-center">
					<FontAwesomeIcon className="h-6 w-6 rounded-full bg-gray-200 p-2 text-xl text-gray-800" icon={faLanguage} />
					{stats.languagesSpoken.map((language, index) => (
						<p key={index} className="text-md ml-4 font-medium text-gray-800">
							{language}{" "}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default General;
