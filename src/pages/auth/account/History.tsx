import React, { useEffect, useState } from "react";
import { ItineraryWithId } from "../../../types/ResponseTypes";
import { UserAuth } from "../../../context/AuthContext";
import { retrieveItineraries, deleteItinerary } from "../../../utils/firestoreFunctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faEye } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { useItinerary } from "../../../context/ItineraryContext";
import HistorySkeleton from "../HistorySkeleton";

const History: React.FC = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const [itineraries, setItineraries] = useState<ItineraryWithId[]>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const { user } = UserAuth();
	const { setResponse, setIsSaved } = useItinerary();

	const itemsPerPage = 8;
	const navigate = useNavigate();

	useEffect(() => {
		const loadItineraries = async () => {
			if (user) {
				return await retrieveItineraries(user.uid);
			}
			return [];
		};

		const fetchItineraries = async () => {
			try {
				setLoading(true);
				const loadedItineraries = await loadItineraries();
				setItineraries(loadedItineraries);
				setLoading(false);
			} catch (err) {
				setError("Failed to load itineraries");
				setLoading(false);
			}
		};

		fetchItineraries();
	}, [user]);

	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItineraries = itineraries.slice(indexOfFirstItem, indexOfLastItem);

	const totalPages = Math.ceil(itineraries.length / itemsPerPage);

	const renderPageNumbers = () => {
		const pages = [];
		for (let i = 1; i <= totalPages; i++) {
			pages.push(
				<button key={i} onClick={() => setCurrentPage(i)} className={`rounded-lg border px-3 py-1 ${currentPage === i ? "bg-blue-500 text-white" : ""}`}>
					{i}
				</button>
			);
		}
		return pages;
	};

	const handleDelete = async (itineraryId: string) => {
		if (!user) {
			console.error("User is not authenticated");
			setError("User is not authenticated");
			return;
		}

		try {
			await deleteItinerary(itineraryId);
			console.log(`Removing item: ${itineraryId}`);
			setItineraries((prevItineraries) => prevItineraries.filter((itinerary) => itinerary.id !== itineraryId));
		} catch (error) {
			console.error("Failed to delete itinerary:", error);
			setError("Failed to delete itinerary");
		}
	};

	const handleRecall = async (itinerary: ItineraryWithId) => {
		if (!user) {
			console.error("User is not authenticated");
			setError("User is not authenticated");
			return;
		}

		try {
			setIsSaved(true);
			setResponse(itinerary); // Update the response based on the itinerary ID
			navigate("/planner"); // Navigate to the planner page
		} catch (error) {
			console.error("Error in recalling itinerary:", error);
			setError("Error in recalling itinerary");
		}
	};

	const dayOrDays = (numberOfDays: number) => {
		return numberOfDays > 1 ? "Days in " : "Day in ";
	};

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div>
			<h2 className="mb-8 text-5xl font-bold text-gray-800">Previous Itineraries</h2>
			{loading ? (
				<HistorySkeleton times={3} />
			) : itineraries.length === 0 ? (
				<p className="font-medium text-gray-500">No itineraries found</p>
			) : (
				<ul className="space-y-4">
					{currentItineraries.map((itinerary, id) => (
						<li className="flex items-center justify-between rounded-2xl border border-gray-300 border-opacity-20 bg-white px-8 py-4 shadow-xl" key={id}>
							<div>
								<p className="text-xl font-semibold">
									{itinerary.destination.numberOfDays} {dayOrDays(itinerary.destination.numberOfDays)}
									{itinerary.destination.destinationCity}, {itinerary.destination.destinationCountry}
								</p>
								<p>
									{itinerary.destination.startDate} - {itinerary.destination.endDate}
								</p>
							</div>
							<div className="flex space-x-2">
								<button onClick={() => handleDelete(itinerary.id)} className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-red-400 text-red-400">
									<FontAwesomeIcon className="text-xl" icon={faTrashCan} />
								</button>
								<button onClick={() => handleRecall(itinerary)} className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-blue-500 bg-blue-500 text-white">
									<FontAwesomeIcon className="text-xl" icon={faEye} />
								</button>
							</div>
						</li>
					))}
				</ul>
			)}
			<div className="mt-4 flex justify-center space-x-2">{renderPageNumbers()}</div>
		</div>
	);
};

export default History;
