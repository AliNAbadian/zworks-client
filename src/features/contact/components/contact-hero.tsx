import HeroBg from "@/components/ui/HeroSection/HeroBg";
import ContactCtaHeading from "@/features/contact/components/contact-cta-heading";
import ContactForm from "@/features/contact/components/contact-form";

const ContactHero = () => {
  return (
    <section className="relative mx-auto min-h-[calc(100vh-3.5rem)] w-full overflow-hidden lg:min-h-screen">
      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-3.5rem)] items-center px-4 py-20 md:px-6 lg:min-h-screen lg:py-32">
        <div className="flex w-full flex-col-reverse items-stretch gap-8 sm:gap-12 lg:flex-row lg:items-center lg:gap-16">
          <ContactForm />
          <ContactCtaHeading />
        </div>
      </div>

      <HeroBg />
    </section>
  );
};

export default ContactHero;
