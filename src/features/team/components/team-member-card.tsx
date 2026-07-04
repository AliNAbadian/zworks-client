"use client";

import ProfileCard from "@/components/ProfileCard";
import TeamSocialLinks from "@/features/team/components/team-social-links";
import {
  MARS_AVATAR_URL,
  MARS_CARD_THEME,
} from "@/features/team/lib/mars-theme";
import type { TeamMember } from "@/features/team/team-model";
import { cn } from "@/lib/utils";

type TeamMemberCardProps = {
  member: TeamMember;
  className?: string;
};

const TeamMemberCard = ({ member, className }: TeamMemberCardProps) => {
  return (
    <ProfileCard
      {...MARS_CARD_THEME}
      avatarClassName="max-h-[72%] object-contain p-8 drop-shadow-[0_20px_60px_rgb(var(--primary-rgb)/0.35)]"
      avatarUrl={MARS_AVATAR_URL}
      bottomContent={
        <TeamSocialLinks
          className="w-full justify-center gap-2 [&_a]:size-11 [&_svg]:size-5"
          links={member.socialLinks}
        />
      }
      className={cn("w-full", className)}
      enableMobileTilt={false}
      fillWidth
      maxHeight="480px"
      miniAvatarUrl={MARS_AVATAR_URL}
      name={member.name}
      showUserInfo={false}
      title={member.role}
    />
  );
};

export default TeamMemberCard;
