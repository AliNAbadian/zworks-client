import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface AccordionProps {
  id: string;
  title: string;
  content: string;
}

const AccordionFaq = ({ id, title, content }: AccordionProps) => {
  return (
    <Accordion type="single" className="border-b" collapsible>
      <AccordionItem value={id}>
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>{content}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionFaq;
