import AccordionFaq from "@/components/ui/FAQ/AccordionFaq";
import FaqHeader from "@/components/ui/FAQ/FaqHeader";
import { homeFaqItems } from "@/features/home/home-data";
import React from "react";

const FAQ = () => {
  const leftColumn = homeFaqItems.slice(0, 5);
  const rightColumn = homeFaqItems.slice(5);

  return (
    <section className="relative container mx-auto my-10 px-4 font-iransans lg:max-h-screen">
      <FaqHeader />
      <div className="my-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        <div>
          {leftColumn.map((item) => (
            <AccordionFaq
              key={item.title}
              content={item.content}
              title={item.title}
            />
          ))}
        </div>
        <div>
          {rightColumn.map((item) => (
            <AccordionFaq
              key={item.title}
              content={item.content}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
