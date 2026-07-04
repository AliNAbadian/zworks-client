import type { TeamMember } from "@/features/team/team-model";
import TeamSocialLinks from "@/features/team/components/team-social-links";
import { cn } from "@/lib/utils";

type TeamMemberCardProps = {
  member: TeamMember;
  className?: string;
};

const TeamMemberCard = ({ member, className }: TeamMemberCardProps) => {
  return (
    <article
      className={cn(
        "group relative flex min-h-[420px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#1a1a1a] sm:min-h-[480px]",
        "shadow-[0_30px_80px_-50px_rgba(0,0,0,0.9)] transition-shadow duration-500",
        "hover:shadow-[0_40px_100px_-50px_rgb(var(--primary-rgb)/0.35)]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/images/abstractpattern.svg')] bg-cover opacity-[0.08]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-1/4 top-0 h-[469px] bg-[radial-gradient(ellipse_at_center,rgb(var(--primary-rgb)/0.18),transparent_70%)] opacity-80"
      />

      <div className="relative flex flex-1 flex-col items-center px-6 pb-8 pt-12">
        <div className="relative mb-6 flex size-[140px] items-center justify-center rounded-full border border-white/10 bg-white/5 p-3.5">
          <div className="flex size-full items-center justify-center rounded-full border border-white/10 bg-[#131917] p-4">
            <div
              className="size-20 rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
              style={{ background: member.avatarGradient }}
            />
          </div>
        </div>

        <h3 className="mb-4 text-center text-xl font-bold text-white">
          {member.name}
        </h3>

        <span className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/10 bg-[#131917] px-6 text-sm font-medium text-content-gray">
          {member.role}
        </span>
      </div>

      <div className="relative border-t border-white/10 bg-[#131917]/60 px-6 py-6">
        <TeamSocialLinks links={member.socialLinks} />
      </div>
    </article>
  );
};

export default TeamMemberCard;
