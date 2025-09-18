import LinkButton from "@/components/shared/ui/LinkButton";
import ServicesCard from "@/components/ui/Services/ServicesCard";
import ServicesHeader from "@/components/ui/Services/ServicesHeader";
import { ArrowLeft, Phone, Pickaxe, Smartphone } from "lucide-react";
import React from "react";

const Services = () => {
  return (
    <section className="min-h-screen w-full font-iransans my-10 container mx-auto">
      <ServicesHeader />
      <div className="grid grid-cols-2 gap-10 my-4 max-h-[70vh] h-[70vh]">
        <ServicesCard titleIcon={<Smartphone />} titleText="طراحی">
          <LinkButton
            className="!w-full"
            href="#"
            linkIcon={<ArrowLeft />}
            linkText="طراحی تجربه و رابط کاربری"
          />{" "}
          <LinkButton
            className="!w-full"
            href="#"
            linkIcon={<ArrowLeft />}
            linkText="طراحی تجربه و رابط کاربری"
          />{" "}
          <LinkButton
            className="!w-full"
            href="#"
            linkIcon={<ArrowLeft />}
            linkText="طراحی تجربه و رابط کاربری"
          />{" "}
          <LinkButton
            className="!w-full"
            href="#"
            linkIcon={<ArrowLeft />}
            linkText="طراحی تجربه و رابط کاربری"
          />{" "}
          <LinkButton
            className="!w-full"
            href="#"
            linkIcon={<ArrowLeft />}
            linkText="طراحی تجربه و رابط کاربری"
          />{" "}
          <LinkButton
            className="!w-full"
            href="#"
            linkIcon={<ArrowLeft />}
            linkText="طراحی تجربه و رابط کاربری"
          />{" "}
        </ServicesCard>
        <ServicesCard titleIcon={<Pickaxe />} titleText="توسعه">
          <LinkButton
            className="!w-full"
            href="#"
            linkIcon={<ArrowLeft />}
            linkText="طراحی تجربه و رابط کاربری"
          />{" "}
          <LinkButton
            className="!w-full"
            href="#"
            linkIcon={<ArrowLeft />}
            linkText="طراحی تجربه و رابط کاربری"
          />{" "}
          <LinkButton
            className="!w-full"
            href="#"
            linkIcon={<ArrowLeft />}
            linkText="طراحی تجربه و رابط کاربری"
          />{" "}
          <LinkButton
            className="!w-full"
            href="#"
            linkIcon={<ArrowLeft />}
            linkText="طراحی تجربه و رابط کاربری"
          />{" "}
          <LinkButton
            className="!w-full"
            href="#"
            linkIcon={<ArrowLeft />}
            linkText="طراحی تجربه و رابط کاربری"
          />{" "}
          <LinkButton
            className="!w-full"
            href="#"
            linkIcon={<ArrowLeft />}
            linkText="طراحی تجربه و رابط کاربری"
          />
        </ServicesCard>
      </div>
    </section>
  );
};

export default Services;
