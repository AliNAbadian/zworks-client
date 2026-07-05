import HeroBg from "@/components/ui/HeroSection/HeroBg";
import { TEAM_HERO } from "@/features/team/lib/constants";

const TeamHero = () => {
  return (
    <section className="relative mx-auto min-h-[calc(100vh-3.5rem)] w-full overflow-hidden lg:min-h-screen">
      <div className="grid min-h-[calc(100vh-3.5rem)] grid-cols-12 lg:min-h-screen">
        {/* <div className="col-span-3 hidden lg:block">
          <SideStripes />
        </div> */}

        <div className="relative col-span-12 flex items-center justify-center px-4 py-20 font-iransans sm:px-6 sm:py-28 lg:col-span-12 lg:py-32">
          <div className="relative z-10 flex max-w-4xl flex-col items-center gap-10 text-center">
            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
              {TEAM_HERO.prefix}{" "}
              <span className="text-primary">{TEAM_HERO.highlight}</span>
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-content-gray md:text-lg">
              {TEAM_HERO.description}
            </p>
          </div>
        </div>

        {/* <div className="col-span-3 hidden lg:block">
          <SideStripes />
        </div> */}
      </div>

      <HeroBg />
    </section>
  );
};

export default TeamHero;
