import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

interface AccordionProps {
  title: string;
  content: string;
}

const AccordionFaq = (props: AccordionProps) => {
  return (
    <Accordion type="single" className="border-b" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{props.title}</AccordionTrigger>
        <AccordionContent>{props.content}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
export default AccordionFaq;
