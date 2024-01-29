import { render, screen } from "@testing-library/react";
import TypingEffect from "../TypeEffect";

jest.useFakeTimers();

describe("TypingEffect", () => {
	test("initial render and typing effect", () => {
		render(<TypingEffect />);

		expect(screen.getByText("|")).toBeInTheDocument();

		// Simulate the typing effect for the first phrase
		for (let i = 1; i <= "Top 10 bars in Budapest".length; i++) {
			jest.advanceTimersByTime(100); // Advance time by the typing speed
			const typedText = "Top 10 bars in Budapest".substring(0, i);
			expect(screen.getByText(typedText)).toBeInTheDocument();
			expect(screen.getByText("|")).toBeInTheDocument(); // Check for cursor separately
		}

		// After typing the first phrase, wait before checking the full phrase
		jest.advanceTimersByTime(1000);
		// No need to check for full text with cursor here, as they are separate elements
	});

	test("blinking cursor", () => {
		render(<TypingEffect />);

		// Initially, the cursor should be visible
		expect(screen.getByText("|")).toBeInTheDocument();

		// Simulate the blinking effect
		jest.advanceTimersByTime(500);
		expect(screen.queryByText("|")).toBeNull(); // Check that the cursor text is not present

		jest.advanceTimersByTime(500);
		expect(screen.getByText("|")).toBeInTheDocument(); // Check that the cursor text is present again
	});
});
