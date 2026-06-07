import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  SEO_FAQ_INTRO,
  faqItems,
} from "@/features/seo/seo-data";

const SeoFaqSection = () => {
  const midpoint = Math.ceil(faqItems.length / 2);
  const leftColumn = faqItems.slice(0, midpoint);
  const rightColumn = faqItems.slice(midpoint);

  const renderColumn = (items: typeof faqItems) => (
    <Accordion className="w-full" collapsible type="single">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          className="border-white/10"
          value={item.id}
        >
          <AccordionTrigger className="text-start font-semibold text-white hover:text-primary">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="leading-relaxed text-content-gray">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );

  return (
    <section className="container mx-auto px-4 md:px-6">
      <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
        <h2 className="font-iransans text-2xl font-black text-white sm:text-3xl lg:text-5xl">
          {SEO_FAQ_INTRO.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-content-gray sm:text-lg">
          {SEO_FAQ_INTRO.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
        {renderColumn(leftColumn)}
        {renderColumn(rightColumn)}
      </div>
    </section>
  );
};

export default SeoFaqSection;
