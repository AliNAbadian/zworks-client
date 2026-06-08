import { ScrollReveal } from "@/components/shared/scroll-reveal";
import AccordionFaq from "@/components/ui/FAQ/AccordionFaq";
import FaqHeader from "@/components/ui/FAQ/FaqHeader";
import { homeFaqItems } from "@/features/home/home-data";

const FAQ = () => {
  const leftColumn = homeFaqItems.slice(0, 5);
  const rightColumn = homeFaqItems.slice(5);

  return (
    <section className="relative container mx-auto my-10 px-4 font-iransans lg:max-h-screen">
      <ScrollReveal>
        <FaqHeader />
      </ScrollReveal>
      <div className="my-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        <ScrollReveal delay={0.1} variant="slideInEnd">
          <div>
            {leftColumn.map((item, index) => (
              <ScrollReveal
                key={item.title}
                delay={0.08 + index * 0.06}
                variant="fadeUp"
              >
                <AccordionFaq content={item.content} title={item.title} />
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15} variant="slideInStart">
          <div>
            {rightColumn.map((item, index) => (
              <ScrollReveal
                key={item.title}
                delay={0.08 + index * 0.06}
                variant="fadeUp"
              >
                <AccordionFaq content={item.content} title={item.title} />
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQ;
