import { CONTACT_CTA_HEADING_LINES } from "@/features/contact/lib/constants";

const ContactCtaHeading = () => {
  return (
    <div className="flex flex-1 items-center justify-center lg:justify-end">
      <h1 className="text-center font-iransans text-5xl font-black leading-[1.15] text-white md:text-6xl lg:text-7xl lg:text-start">
        {CONTACT_CTA_HEADING_LINES.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default ContactCtaHeading;
