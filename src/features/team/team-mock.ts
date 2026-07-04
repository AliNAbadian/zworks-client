import { TEAM_SECTION_COPY } from "@/features/team/lib/constants";
import { MARS_AVATAR_GRADIENT } from "@/features/team/lib/mars-theme";
import type { TeamGroup, TeamMemberSocialLink } from "@/features/team/team-model";

const defaultSocialLinks: TeamMemberSocialLink[] = [
  { platform: "instagram", href: "#" },
  { platform: "twitter", href: "#" },
  { platform: "linkedin", href: "#" },
];

const marsAvatar = MARS_AVATAR_GRADIENT;

export const designTeamGroup: TeamGroup = {
  id: "design",
  title: TEAM_SECTION_COPY.design.title,
  description: TEAM_SECTION_COPY.design.description,
  members: [
    {
      id: "design-1",
      name: "احمد رضائی",
      role: "طراح محصول",
      avatarGradient: marsAvatar,
      socialLinks: defaultSocialLinks,
    },
    {
      id: "design-2",
      name: "احمد رضائی",
      role: "گرافیک دیزاینر",
      avatarGradient: marsAvatar,
      socialLinks: defaultSocialLinks,
    },
    {
      id: "design-3",
      name: "احمد رضائی",
      role: "طراح محصول",
      avatarGradient: marsAvatar,
      socialLinks: defaultSocialLinks,
    },
    {
      id: "design-4",
      name: "احمد رضائی",
      role: "گرافیک دیزاینر",
      avatarGradient: marsAvatar,
      socialLinks: defaultSocialLinks,
    },
  ],
};

export const developmentTeamGroup: TeamGroup = {
  id: "development",
  title: TEAM_SECTION_COPY.development.title,
  description: TEAM_SECTION_COPY.development.description,
  members: [
    {
      id: "dev-1",
      name: "احمد رضائی",
      role: "بک اند دولوپر",
      avatarGradient: marsAvatar,
      socialLinks: defaultSocialLinks,
    },
    {
      id: "dev-2",
      name: "احمد رضائی",
      role: "فرانت اند دولوپر",
      avatarGradient: marsAvatar,
      socialLinks: defaultSocialLinks,
    },
    {
      id: "dev-3",
      name: "احمد رضائی",
      role: "بک اند دولوپر",
      avatarGradient: marsAvatar,
      socialLinks: defaultSocialLinks,
    },
    {
      id: "dev-4",
      name: "احمد رضائی",
      role: "فرانت اند دولوپر",
      avatarGradient: marsAvatar,
      socialLinks: defaultSocialLinks,
    },
  ],
};

export const teamGroups: TeamGroup[] = [designTeamGroup, developmentTeamGroup];
