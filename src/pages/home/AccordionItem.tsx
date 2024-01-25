import { useState, FunctionComponent } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { AccordionItemProps } from "../../types/AccordionProps";

const AccordionItem: FunctionComponent<AccordionItemProps> = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<button onClick={() => setIsOpen(!isOpen)} className="flex w-full items-center justify-between py-5 text-left text-gray-800">
				<span className="text-xl font-bold">{question}</span>
				{isOpen ? <ChevronUpIcon className="h-5 w-5 text-gray-600" /> : <ChevronDownIcon className="h-5 w-5 text-gray-600" />}
			</button>
			<div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-48" : "max-h-0"}`}>
				<p className="text-md mb-4 text-justify font-medium text-gray-500 ">{answer}</p>
			</div>
			<hr className="mt-2 border-gray-300" />
		</div>
	);
};

export default AccordionItem;
