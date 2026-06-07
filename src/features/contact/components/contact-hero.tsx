import Radial from "@/components/shared/effects/Radial";
import HeroBg from "@/components/ui/HeroSection/HeroBg";
import ContactCtaHeading from "@/features/contact/components/contact-cta-heading";
import ContactForm from "@/features/contact/components/contact-form";

const ContactHero = () => {
  return (
    <section className="relative w-full overflow-hidden pt-32 pb-20">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse items-stretch gap-12 lg:flex-row lg:items-center lg:gap-16">
          <ContactForm />
          <ContactCtaHeading />
        </div>
      </div>

      <Radial
        className="start-[70%] top-1/4 -translate-x-1/2"
        color="rgba(0, 178, 98, 0.35)"
        size="60rem"
        transparency={70}
      />

      <HeroBg />
    </section>
  );
};

export default ContactHero;
