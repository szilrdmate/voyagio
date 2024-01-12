import { FunctionComponent } from "react";
import AccordionItem from "./AccordionItem";
import { faqs } from "../data/faqData.ts";

const Accordion: FunctionComponent = () => {
  return (
    <div className='bg-white px-6 pt-16 pb-28 border-t-gray-300 border-[1px]'>
      <div className='max-w-6xl grid grid-cols-1 md:grid-cols-8 mx-auto'>
        <div className='md:col-start-1 md:col-span-1'>
          <h2 className='text-5xl font-extrabold mb-8 text-gray-800'>FAQs</h2>
        </div>
        <div className='md:col-start-4 md:col-span-5 space-y-2'>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
