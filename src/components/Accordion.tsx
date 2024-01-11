import { FunctionComponent } from "react";
import AccordionItem from "./AccordionItem";

const faqs = [
  {
    question: "What is Voyagio?",
    answer:
      "Envision a dedicated travel consultant readily accessible in your mobile device at any moment. Voyagio brings you just that: an intuitive platform to effortlessly organize your journey, providing custom-made travel plans free of charge. Experience the convenience of simple, personalized trip organization with a single tap.",
  },
  {
    question: "Does Voyagio offer its services for free?",
    answer:
      "Indeed, Voyagio is a complimentary planning resource (currently without a fee 😉)",
  },
  {
    question: "What method does Voyagio employ to tailor recommendations?",
    answer:
      "Voyagio meticulously assembles recommendations tailored to you by considering your distinct likes, interests, and travel specifications, guaranteeing a travel plan customized just for you.",
  },
  {
    question: "Is it possible to use Voyagio without an internet connection?",
    answer:
      "Absolutely, Voyagio allows you to save your travel arrangements as a PDF document, which you can retrieve and use any time without needing online connectivity.",
  },
  {
    question: "How can I modify my travel plans with Voyagio?",
    answer:
      "Voyagio enables you to flexibly modify your travel agenda, giving you the freedom to shift, include, or exclude destinations to fashion a travel route that aligns with your personal tastes and timetable.",
  },
  {
    question: "How can I get help with Voyagio?",
    answer:
      "Should you need help or have inquiries regarding the use of Voyagio, do not hesitate to reach out via email at mate.szilard.mark@gmail.com",
  },
];

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
