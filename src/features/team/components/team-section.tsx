import type { TeamGroup } from "@/features/team/team-model";
import TeamMemberCard from "@/features/team/components/team-member-card";
import TeamSectionHeader from "@/features/team/components/team-section-header";

type TeamSectionProps = {
  group: TeamGroup;
};

const TeamSection = ({ group }: TeamSectionProps) => {
  return (
    <section className="flex flex-col gap-16">
      <TeamSectionHeader
        title={group.title}
        description={group.description}
      />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {group.members.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
