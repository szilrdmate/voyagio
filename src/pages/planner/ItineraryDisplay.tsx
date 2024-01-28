import React, { useState, useEffect } from "react";
import Overview from "./Overview";
import General from "./General";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faChevronLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import DayFragment from "./DayFragment";
import { useNavigate } from "react-router-dom";
import CostBreakdown from "./CostBreakdown";
import { ItineraryDisplayProps, ItineraryResponseType } from "../../types/ResponseTypes";
import { useItinerary } from "../../context/ItineraryContext";
import { storeItinerary } from "../../utils/firestoreFunctions";
import { UserAuth } from "../../context/AuthContext";
import { fetchCityImage } from "../../services/placesAPI";

const ItineraryDisplay: React.FC<ItineraryDisplayProps> = ({ response }) => {
	const [isOverview, setIsOverview] = useState<boolean>(true);
	const { setResponse, isSaved, setIsSaved } = useItinerary();
	const [bgImage, setBgImage] = useState("");
	const navigate = useNavigate();
	const { user } = UserAuth();

	useEffect(() => {
		const loadImage = async () => {
			const imageUrl = await fetchCityImage(response.destination.destinationCity);
			setBgImage(imageUrl);
		};

		loadImage();
	}, [response]);

	const isMultipledays = () => {
		return response.destination.numberOfDays > 1 ? "days" : "day";
	};

	const handleNewTrip = () => {
		if (response) {
			setResponse(null);
			setIsSaved(false);
		}
	};

	// TODO: move this function to the it context

	const saveItinerary = async (response: ItineraryResponseType) => {
		if (user && response && !isSaved) {
			// Check if saving is not in progress
			try {
				await storeItinerary(user.uid, response);
				setIsSaved(true); // Set saving to true before starting the save operation
			} catch (error) {
				console.error("Error storing itinerary: ", error);
				setIsSaved(false); // Reset saving state in case of an error
			}
		}
	};

	useEffect(() => {
		if (response && user) {
			saveItinerary(response);
		}
	}, [response, user]);

	const goBack = () => {
		navigate(-1);
		setResponse(null);
		setIsSaved(false);
	};

	return (
		<>
			<div className="no-scrollbar fixed left-0 top-0 z-20 h-screen w-screen overflow-scroll border-r border-gray-300 bg-white md:w-[60vw]">
				<div
					style={{
						backgroundImage: `linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0)), url(${bgImage})`,
					}}
					className="relative flex h-72 flex-col justify-between bg-cover bg-center px-4 py-4"
				>
					<div className="py-3">
						<button onClick={goBack} className="text-lg font-semibold tracking-wide text-white underline">
							<FontAwesomeIcon className="mr-2 text-base" icon={faChevronLeft} />
							Go Back
						</button>
					</div>
					<button className="button absolute right-5 top-5 text-white" onClick={handleNewTrip}>
						<FontAwesomeIcon icon={faPlus} className="mr-2" />
						New Trip
					</button>
					<div>
						<h1 className="text-3xl font-bold leading-loose tracking-wide text-white">
							{response.destination.numberOfDays} {isMultipledays()} trip to {response.destination.destinationCity}, {response.destination.destinationCountry}
						</h1>
						<div className="flex items-center">
							<FontAwesomeIcon className="mr-4 text-white" icon={faCalendarDays} />
							<h2 className="text-lg font-semibold text-white">
								{response.destination.startDate} - {response.destination.endDate}
							</h2>
						</div>
					</div>
				</div>
				<div id="info" className="border-y border-gray-300">
					{isOverview && <Overview info={response.destination} setState={setIsOverview} />}
					{!isOverview && <General stats={response.destination} setState={setIsOverview} />}
				</div>
				<div className="px-8 pt-8">
					<h2 className="text-3xl font-black text-gray-800">Itinerary</h2>
					{response && response.itinerary.map((days) => <DayFragment key={days.day} itinerary={days} />)}
				</div>
				<div id="cost" className="p-8">
					<CostBreakdown estimatedCosts={response.estimatedCosts} />
				</div>
			</div>
		</>
	);
};

export default ItineraryDisplay;
