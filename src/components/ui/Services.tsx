import LinkButton from "@/components/shared/ui/LinkButton";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import ServicesCard from "@/components/ui/Services/ServicesCard";
import ServicesHeader from "@/components/ui/Services/ServicesHeader";
import {
  homeDesignServices,
  homeDevelopmentServices,
} from "@/features/home/home-data";
import { ArrowLeft, Pickaxe, Smartphone } from "lucide-react";

const Services = () => {
  return (
    <section className="min-h-screen w-full font-iransans my-10 container mx-auto ">
      <ScrollReveal>
        <ServicesHeader />
      </ScrollReveal>
      <div className="my-4 grid h-auto grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10 lg:h-[70vh] lg:max-h-[70vh]">
        <ScrollReveal delay={0.1} variant="slideInEnd">
          <ServicesCard titleIcon={<Smartphone />} titleText="طراحی">
            {homeDesignServices.map((service) => (
              <LinkButton
                key={service.href}
                className="!w-full"
                href={service.href}
                linkIcon={<ArrowLeft />}
                linkText={service.label}
              />
            ))}
          </ServicesCard>
        </ScrollReveal>
        <ScrollReveal delay={0.2} variant="slideInStart">
          <ServicesCard titleIcon={<Pickaxe />} titleText="توسعه">
            {homeDevelopmentServices.map((service) => (
              <LinkButton
                key={service.href}
                className="!w-full"
                href={service.href}
                linkIcon={<ArrowLeft />}
                linkText={service.label}
              />
            ))}
          </ServicesCard>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
