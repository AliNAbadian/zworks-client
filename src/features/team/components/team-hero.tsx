import Radial from "@/components/shared/effects/Radial";
import SideStripes from "@/components/ui/development/SideStripes";
import HeroBg from "@/components/ui/HeroSection/HeroBg";
import { TEAM_HERO } from "@/features/team/lib/constants";

const TeamHero = () => {
  return (
    <section className="relative mx-auto min-h-screen w-full overflow-hidden">
      <div className="grid min-h-screen grid-cols-12">
        <div className="col-span-3 hidden lg:block">
          <SideStripes />
        </div>

        <div className="relative col-span-12 flex items-center justify-center px-6 py-32 font-iransans lg:col-span-6">
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

        <div className="col-span-3 hidden lg:block">
          <SideStripes />
        </div>
      </div>

      <Radial
        className="start-1/2 top-0 -translate-x-1/2 -translate-y-1/4"
        color="rgba(0, 178, 98, 0.35)"
        size="70rem"
        transparency={65}
      />

      <HeroBg />
    </section>
  );
};

export default TeamHero;
