import { FunctionComponent } from "react";
import AccordionItem from "./AccordionItem.tsx";
import { faqs } from "../../data/faqData.ts";

const Accordion: FunctionComponent = () => {
	return (
		<div className="border border-t-gray-300 bg-white px-6 pb-28 pt-16">
			<div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-8">
				<div className="md:col-span-1 md:col-start-1">
					<h2 className="mb-8 text-5xl font-extrabold text-gray-800">FAQs</h2>
				</div>
				<div className="space-y-2 md:col-span-5 md:col-start-4">
					{faqs.map((faq, index) => (
						<AccordionItem key={index} question={faq.question} answer={faq.answer} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Accordion;
