import CallToAction from "@/components/ui/CallToAction";
import TeamHero from "@/features/team/components/team-hero";
import TeamSection from "@/features/team/components/team-section";
import { teamGroups } from "@/features/team/team-mock";

const TeamPage = () => {
  return (
    <div className="min-h-screen overflow-x-hidden font-iransans">
      <TeamHero />

      <div className="container mx-auto flex flex-col gap-16 px-4 py-12 sm:gap-24 sm:py-16 md:px-6 lg:gap-32 lg:py-24">
        {teamGroups.map((group) => (
          <TeamSection key={group.id} group={group} />
        ))}
      </div>

      <CallToAction />
    </div>
  );
};

export default TeamPage;
