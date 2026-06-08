import FlowCard from "./FlowCard";
import { developmentFlowSteps } from "@/features/development/development-data";

const FlowCards = () => {
  return (
    <section className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:py-24" dir="rtl">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {developmentFlowSteps.map((item) => (
          <FlowCard key={item.step} {...item} />
        ))}
      </div>
    </section>
  );
};

export default FlowCards;
