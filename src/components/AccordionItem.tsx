import { useState, FunctionComponent } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem: FunctionComponent<AccordionItemProps> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex justify-between items-center w-full text-left text-gray-800 py-5'>
        <span className='text-xl font-bold'>{question}</span>
        {isOpen ? (
          <ChevronUpIcon className='w-5 h-5 text-gray-600' />
        ) : (
          <ChevronDownIcon className='w-5 h-5 text-gray-600' />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all ${
          isOpen ? "max-h-40" : "max-h-0"
        }`}>
        <p className='text-md mb-4 font-medium text-gray-500 text-justify '>
          {answer}
        </p>
      </div>
      <hr className='mt-2 border-gray-300' />
    </div>
  );
};

export default AccordionItem;
