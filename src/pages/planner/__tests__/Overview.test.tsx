import { render, fireEvent } from "@testing-library/react";
import Overview from "../Overview"; //
import response from "../../../data/exampleResponse.json";

const mock = {
	info: response.destination,
	setState: jest.fn(), // Call jest.fn() to create a mock function
};

test("renders Overview component", () => {
	const { getByText } = render(<Overview {...mock} />);

	// Check if the "Overview" button is present
	const overviewButton = getByText("Overview");
	expect(overviewButton).toBeInTheDocument();

	// Check if the "General Information" button is present
	const generalInfoButton = getByText("General Information");
	expect(generalInfoButton).toBeInTheDocument();

	// Simulate a click event on the "General Information" button
	fireEvent.click(generalInfoButton);

	// Verify that the setState function was called with the expected argument
	expect(mock.setState).toHaveBeenCalledWith(false);

	// Check if the description and history text is present
	const descriptionText = getByText("Description");
	const historyText = getByText("History");

	expect(descriptionText).toBeInTheDocument();
	expect(historyText).toBeInTheDocument();

	// Check if the description and history content is present
	const descriptionContent = getByText(response.destination.shortDescription);
	const historyContent = getByText(response.destination.shortHistory);

	expect(descriptionContent).toBeInTheDocument();
	expect(historyContent).toBeInTheDocument();

	fireEvent.click(overviewButton);
	const overviewButtonAfterClick = getByText("Overview");
	expect(overviewButtonAfterClick).toBeInTheDocument();
});
