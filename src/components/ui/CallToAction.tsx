import { ScrollReveal } from "@/components/shared/scroll-reveal";
import Cta from "@/components/ui/CallToAction/Cta";

const CallToAction = () => {
  return (
    <section className="relative container mx-auto my-16 px-4 lg:my-24 lg:max-h-screen">
      <ScrollReveal duration={0.8} variant="scaleIn">
        <Cta />
      </ScrollReveal>
    </section>
  );
};

export default CallToAction;
