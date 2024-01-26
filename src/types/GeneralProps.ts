import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type GeneralProps = {
	setState: React.Dispatch<React.SetStateAction<boolean>>;
	stats: StatsProps;
};

type StatsProps = {
	numberOfDays: number;
	destinationCity: string;
	destinationCountry: string;
	currency: string;
	oneDollarInLocalCurrency: number;
	languagesSpoken: string[];
	timeThereInUtcFormat: string;
	capitalOfTheCountry: string;
	localWeather: string;
	temperatureRangeThroughTheYear: string;
};

export interface StatItemProps {
	icon: IconDefinition;
	content: React.ReactNode;
}