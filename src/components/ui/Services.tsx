import LinkButton from "@/components/shared/ui/LinkButton";
import ServicesCard from "@/components/ui/Services/ServicesCard";
import ServicesHeader from "@/components/ui/Services/ServicesHeader";
import {
  homeDesignServices,
  homeDevelopmentServices,
} from "@/features/home/home-data";
import { ArrowLeft, Pickaxe, Smartphone } from "lucide-react";
import React from "react";

const Services = () => {
  return (
    <section className="min-h-screen w-full font-iransans my-10 container mx-auto ">
      <ServicesHeader />
      <div className="my-4 grid h-auto grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10 lg:h-[70vh] lg:max-h-[70vh]">
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
      </div>
    </section>
  );
};

export default Services;
