import { HOME_SERVICES_INTRO } from "@/features/home/home-data";

const ServicesHeader = () => {
  return (
    <div className="container mx-auto">
      <h2 className="py-10 text-center font-black text-3xl text-balance sm:text-4xl md:text-5xl lg:text-6xl">
        خدمات{" "}
        <span className="text-content-gray">ما</span>
      </h2>
      <p className="text-center text-content-gray">{HOME_SERVICES_INTRO}</p>
    </div>
  );
};

export default ServicesHeader;
