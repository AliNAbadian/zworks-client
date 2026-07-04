"use client";

import { useMemo, useState } from "react";

import { ScrollReveal } from "@/components/shared/scroll-reveal";
import AccordionFaq from "@/components/ui/FAQ/AccordionFaq";
import FaqHeader from "@/components/ui/FAQ/FaqHeader";
import { homeFaqItems } from "@/features/home/home-data";

const FAQ = () => {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return homeFaqItems;

    return homeFaqItems.filter(
      (item) =>
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.content.toLowerCase().includes(normalizedQuery),
    );
  }, [query]);

  const midpoint = Math.ceil(filteredItems.length / 2);
  const leftColumn = filteredItems.slice(0, midpoint);
  const rightColumn = filteredItems.slice(midpoint);

  return (
    <section className="relative container mx-auto my-10 px-4 font-iransans lg:max-h-screen">
      <ScrollReveal>
        <FaqHeader onQueryChange={setQuery} query={query} />
      </ScrollReveal>

      {filteredItems.length === 0 ? (
        <p className="my-10 text-center text-content-gray">
          سوالی با این عبارت پیدا نشد. عبارت دیگری امتحان کنید.
        </p>
      ) : (
        <div className="my-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <ScrollReveal delay={0.1} variant="slideInEnd">
            <div>
              {leftColumn.map((item, index) => (
                <ScrollReveal
                  key={item.id}
                  delay={0.08 + index * 0.06}
                  variant="fadeUp"
                >
                  <AccordionFaq
                    content={item.content}
                    id={item.id}
                    title={item.title}
                  />
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15} variant="slideInStart">
            <div>
              {rightColumn.map((item, index) => (
                <ScrollReveal
                  key={item.id}
                  delay={0.08 + index * 0.06}
                  variant="fadeUp"
                >
                  <AccordionFaq
                    content={item.content}
                    id={item.id}
                    title={item.title}
                  />
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      )}
    </section>
  );
};

export default FAQ;
