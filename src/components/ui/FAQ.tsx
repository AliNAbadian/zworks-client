import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AccordionFaq from "@/components/ui/FAQ/AccordionFaq";
import FaqHeader from "@/components/ui/FAQ/FaqHeader";
import React from "react";

const FAQ = () => {
  return (
    <section className="relative my-10 max-h-screen font-iransans container mx-auto">
      <FaqHeader />
      <div className="grid grid-cols-2 my-10 gap-8">
        <div className="col-span-1">
          <AccordionFaq content="لورم ایپسوم" title="لورم ایپسوم" />
          <AccordionFaq content="لورم ایپسوم" title="لورم ایپسوم" />
          <AccordionFaq content="لورم ایپسوم" title="لورم ایپسوم" />
          <AccordionFaq content="لورم ایپسوم" title="لورم ایپسوم" />
          <AccordionFaq content="لورم ایپسوم" title="لورم ایپسوم" />
        </div>
        <div className="col-span-1">
          <AccordionFaq content="لورم ایپسوم" title="لورم ایپسوم" />
          <AccordionFaq content="لورم ایپسوم" title="لورم ایپسوم" />
          <AccordionFaq content="لورم ایپسوم" title="لورم ایپسوم" />
          <AccordionFaq content="لورم ایپسوم" title="لورم ایپسوم" />
          <AccordionFaq content="لورم ایپسوم" title="لورم ایپسوم" />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
