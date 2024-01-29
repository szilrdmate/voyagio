import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BlogCard from "../Blogcard";
import { BlogPost } from "../../../types/BlogPost";

describe("BlogCard", () => {
	const mockPost: BlogPost = {
		id: 1,
		title: "Test Post",
		tags: ["React", "JavaScript"],
		image: "https://example.com/test.jpg",
		content: "<p>Sample content</p>",
		preview: "This is a test preview text for the blog post.",
		date: "2024-01-01",
	};
	it("renders the blog card", () => {
		render(<BlogCard post={mockPost} onClick={() => {}} />);
		expect(screen.getByText(/Test Post/)).toBeInTheDocument();
		expect(screen.getByText("React")).toBeInTheDocument();
		expect(screen.getByText("JavaScript")).toBeInTheDocument();
		expect(screen.getByAltText("Test Post")).toHaveAttribute("src", "https://example.com/test.jpg");
		expect(screen.getByText("This is a test preview text for the blog post.")).toBeInTheDocument();
		expect(screen.getByRole("button", { name: /Read More/i })).toBeInTheDocument();
	});

	it("calls onClick when the card is clicked", () => {
		const handleClick = jest.fn();
		render(<BlogCard post={mockPost} onClick={handleClick} />);
		const readMoreButton = screen.getByRole("button", { name: /Read More/i });
		fireEvent.click(readMoreButton);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
